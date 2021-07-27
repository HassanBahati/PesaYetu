import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import mapLines from "@/pesayetu/assets/images/Mask Group 8@2x.png";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
    backgroundPosition: "50% 100%",
    minHeight: "min-content",
    position: "relative",
    paddingBottom: typography.pxToRem(43),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(98),
    },
  },
  textContainer: {
    height: "100%",
    paddingTop: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(129.94),
    },
  },
  intro: {
    fontWeight: "bold",
  },
  title: {
    marginBottom: typography.pxToRem(20),
    fontWeight: "bold",
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(40),
    },
  },
  tagline: {
    marginRight: 0,
  },
  backgroundGrid: {
    width: "100%",
    height: "100%",
    backgroundImage: `url('${mapLines}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: 1,
    display: "flex",
    [breakpoints.up("md")]: {
      paddingLeft: `calc((100vw - ${breakpoints.values.md}px)/2)`,
      position: "absolute",
    },
  },
  leftBackground: {
    [breakpoints.up("md")]: {
      height: typography.pxToRem(391),
    },
  },
  rightBackground: {
    height: typography.pxToRem(391),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: ({ image }) => `url('${image}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [breakpoints.up("md")]: {
      height: "100%",
      marginLeft: `calc((-100vw + ${breakpoints.values.md}px)/6)`,
    },
  },
  repeatGrid: {
    width: typography.pxToRem(262),
    height: "auto",
    [breakpoints.up("md")]: {
      width: typography.pxToRem(400),
    },
  },
  section: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    backgroundImage: `url('${mapLines}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [breakpoints.up("md")]: {
      backgroundImage: "none",
    },
  },
}));
function OtherHero({ image, intro, repeatGrid, tagline, title, ...props }) {
  const classes = useStyles({ image, ...props });

  if (!title?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.backgroundGrid}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <div className={classes.leftBackground} />
          </Grid>

          <Grid item xs={12} md={7}>
            <div className={classes.rightBackground}>
              <img className={classes.repeatGrid} src={repeatGrid} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <div className={classes.textContainer}>
              <Typography className={classes.intro} variant="h6">
                {intro}
              </Typography>
              <RichTypography className={classes.title} variant="h2">
                {title}
              </RichTypography>
              <Typography className={classes.tagline} variant="body1">
                {tagline}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

OtherHero.propTypes = {
  image: PropTypes.string,
  intro: PropTypes.string,
  repeatGrid: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

OtherHero.defaultProps = {
  image: undefined,
  intro: undefined,
  repeatGrid: undefined,
  tagline: undefined,
  title: undefined,
};

export default OtherHero;
