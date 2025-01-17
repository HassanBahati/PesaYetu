import { Drawer } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

function DesktopPanel({
  isPinning,
  isCompare,
  onClickPin,
  onClickUnpin,
  panelItems: panelItemsProp,
  ...props
}) {
  const [value, setValue] = React.useState();
  const [pins, setPins] = React.useState([]);
  const [panelItems, setPanelItems] = React.useState(panelItemsProp);
  const paperRef = React.useRef();
  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });

  useEffect(() => {
    setPanelItems((pi) => {
      const foundCompare = pi?.find((item) => item.value === "secondaryPin");
      if (isCompare && !foundCompare) {
        const pinItems = pi?.find((i) => i.value === "pin");
        const secondaryPin = {
          ...pinItems,
          value: "secondaryPin",
        };
        return [...pi, secondaryPin];
      }
      if (!isCompare && foundCompare) {
        return pi?.filter((p) => p?.value !== "secondaryPin");
      }
      return pi;
    });
  }, [isCompare]);

  useEffect(() => {
    if (isPinning || isCompare) {
      setPins((p) => {
        const index = p.indexOf("pin");
        if (index === -1) {
          return [...p, "pin"];
        }
        return p;
      });
    } else if (!isPinning && !isCompare) {
      setPins((p) => {
        const index = p.indexOf("pin");
        const c = [...p];
        if (index !== -1) {
          c?.splice(index, 1);
        }
        return c;
      });
    }
  }, [isPinning, isCompare]);

  const isPin = (current) => {
    const found = panelItems.find((item) => item.value === current);
    return !!found?.pin;
  };
  if (!panelItems?.length) {
    return null;
  }

  function addOrRemovePin(array, pin) {
    const newArray = [...array];
    const index = newArray.indexOf(pin);
    if (index === -1) {
      newArray.push(pin);
    } else {
      newArray.splice(index, 1);
    }
    return newArray;
  }

  const handleChange = (nextValue) => {
    if (isPin(nextValue)) {
      setPins(addOrRemovePin(pins, nextValue));
      if (!isPinning && !isCompare) {
        onClickPin();
      } else {
        onClickUnpin();
      }
    }
    if (!nextValue) {
      setPins([]);
    }

    setValue(nextValue);
  };

  const open = value === "rich-data";
  return (
    <Drawer
      PaperProps={{ ref: paperRef }}
      classes={{
        root: clsx(classes.root, {
          [classes.drawerOpen]: !!value,
          [classes.drawerClose]: !value,
        }),
        paper: classes.paper,
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      {panelItems?.map((item) => (
        <TabPanel
          key={item.value}
          name={item.value}
          selected={item.value}
          value={open ? value : undefined}
          classes={{ tabPanel: classes.tabPanel }}
        >
          <PanelItem
            item={item}
            onClickUnpin={onClickUnpin}
            isPinning={isPinning}
            onClickPin={onClickPin}
            {...props}
          />
        </TabPanel>
      ))}
      <PanelButtonGroup
        onChange={handleChange}
        items={panelItems}
        value={open ? value : undefined}
        pins={pins}
        classes={{
          root: clsx(classes.panelButtons, {
            [classes.panelButtonsOpen]: open,
          }),
        }}
      />
    </Drawer>
  );
}

DesktopPanel.propTypes = {
  isCompare: PropTypes.bool,
  isPinning: PropTypes.bool,
  onClickPin: PropTypes.func,
  onClickUnpin: PropTypes.func,
  panelItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      children: PropTypes.node,
      tree: PropTypes.shape({}),
    })
  ),
};

DesktopPanel.defaultProps = {
  isCompare: undefined,
  isPinning: undefined,
  onClickPin: undefined,
  onClickUnpin: undefined,
  panelItems: undefined,
};

export default DesktopPanel;
