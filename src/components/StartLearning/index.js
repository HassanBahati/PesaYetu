import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import mapLines from "@/pesayetu/assets/images/Mask Group 8.jpg";
import Header from "@/pesayetu/components/Header";
import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundImage: `url('${mapLines.src}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: typography.pxToRem(80),
    paddingBottom: typography.pxToRem(80),
  },
  button: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  section: {
    textAlign: "center",
  },
  subtitle: {
    marginTop: typography.pxToRem(40),
    marginBottom: typography.pxToRem(40),
  },
}));

const StartLearning = ({ ctaText, href, title, subtitle, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Header>{title}</Header>
        <Typography variant="h3" className={classes.subtitle}>
          {subtitle}
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          href={href}
          variant="text"
        >
          {ctaText}
        </Button>
      </Section>
    </div>
  );
};

StartLearning.propTypes = {
  ctaText: PropTypes.string,
  href: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

StartLearning.defaultProps = {
  ctaText: undefined,
  href: undefined,
  subtitle: undefined,
  title: undefined,
};

export default StartLearning;
