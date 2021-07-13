/* eslint-disable @next/next/no-img-element */
import { A } from '@commons-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Logo({ alt, href, src, ...props }) {
  const classes = useStyles(props);
  return (
    <A href={href}>
      <img src={src} alt={alt} className={classes.image} />
    </A>
  );
}

Logo.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
};

Logo.defaultProps = {
  alt: undefined,
  href: undefined,
  src: undefined,
};

export default Logo;
