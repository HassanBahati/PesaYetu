import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import L from "leaflet";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap, LayerGroup, FeatureGroup, GeoJSON } from "react-leaflet";

import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";
import theme from "@/pesayetu/theme";

const useStyles = makeStyles(() => ({
  locationtag: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

const geoStyles = {
  inactive: {
    fillColor: "#f8f8f8",
    fillOpacity: 1,
    color: "#666666",
    weight: 1,
  },
  hoverOnly: {
    over: {
      fillColor: "#7DB2D3",
      fillOpacity: 1,
      color: "#666666",
    },
    out: {
      fillColor: "#DFDFDF",
      fillOpacity: 1,
      color: "#666666",
      weight: 1,
    },
  },
  selected: {
    over: {
      color: "#666666",
      fillColor: "#7DB2D3",
      opacity: 1,
    },
    out: {
      color: "#666666",
      fillColor: "#7DB2D3",
      strokeWidth: 1,
      opacity: 1,
      fillOpacity: 1,

      weight: 1.5,
    },
  },
};

const Layers = ({
  selectedBoundary,
  parentsGeometries,
  onClick,
  locationCodes,
  ...props
}) => {
  const map = useMap();
  const router = useRouter();
  const groupRef = useRef();
  const classes = useStyles(props);

  const onEachFeature = useCallback(
    (feature, layer) => {
      if (!locationCodes?.includes(feature.properties.code)) {
        layer.setStyle(geoStyles.inactive);
      } else {
        const popUpContent = (level, name) =>
          ReactDOMServer.renderToStaticMarkup(
            <ThemeProvider theme={theme}>
              <LocationTag
                level={level}
                name={name.toLowerCase()}
                classes={{ root: classes.locationtag }}
              />
            </ThemeProvider>
          );

        layer
          .bindTooltip(
            popUpContent(feature.properties.level, feature.properties.name),
            { direction: "top", opacity: 1, className: "tooltip" }
          )
          .openTooltip();

        layer.setStyle(
          feature?.properties?.selected
            ? geoStyles.selected.out
            : geoStyles.hoverOnly.out
        );
        layer.on("mouseover", () => {
          layer.setStyle(
            feature?.properties?.selected
              ? geoStyles.selected.over
              : geoStyles.hoverOnly.over
          );
        });
        layer.on("mouseout", () => {
          layer.setStyle(
            feature?.properties?.selected
              ? geoStyles.selected.out
              : geoStyles.hoverOnly.out
          );
        });
        layer.on("click", (e) => {
          const href = `/explore/${feature.properties.code.toLowerCase()}`;
          router.push(href, href, { shallow: !!onClick });
          if (onClick) {
            onClick(e, {
              code: feature.properties.code,
              level: feature.properties.level,
              name: feature.properties.name,
            });
          }
        });
      }
    },
    [classes.locationtag, locationCodes, onClick, router]
  );

  useEffect(() => {
    const layer = groupRef.current;
    if (layer) {
      layer.clearLayers();
      const featuredGeo = new L.GeoJSON(selectedBoundary, { onEachFeature });
      layer.addLayer(featuredGeo);
      map.fitBounds(layer.getBounds(), {
        animate: true,
        duration: 0.5, // in seconds
      });
    }
  }, [groupRef, selectedBoundary, map, onEachFeature]);

  return (
    <>
      <LayerGroup>
        {parentsGeometries?.map((g) => (
          <GeoJSON
            key={g.features[0].properties.name}
            data={g}
            onEachFeature={onEachFeature}
          />
        ))}
      </LayerGroup>
      <FeatureGroup ref={groupRef}>
        <GeoJSON data={selectedBoundary} onEachFeature={onEachFeature} />
      </FeatureGroup>
    </>
  );
};

Layers.propTypes = {
  parentsGeometries: PropTypes.arrayOf(PropTypes.shape({})),
  selectedBoundary: PropTypes.shape({}),
  onClick: PropTypes.func,
  locationCodes: PropTypes.arrayOf(PropTypes.string),
};

Layers.defaultProps = {
  parentsGeometries: undefined,
  selectedBoundary: undefined,
  onClick: undefined,
  locationCodes: undefined,
};

export default Layers;
