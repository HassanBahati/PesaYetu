import { Typography } from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const CategoryHeader = ({ title, description, icon }) => {
  const classes = useStyles();

  if (!title) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <div className={classes.icon}>
          <Icon src={icon} layout="fill" />
        </div>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

CategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

CategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
  icon: undefined,
};

export default CategoryHeader;
