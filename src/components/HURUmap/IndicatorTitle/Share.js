import { Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ShareButton from "./ShareButton";
import useStyles from "./useStyles";

function Share({ title, geoCode, indicatorId, view, isCompare, ...props }) {
  // Embed url
  const url = `${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}`;

  const shareData = [
    { name: "Facebook", props: { quote: title, hashtag: "#PesaYetu" } },
    {
      name: "Twitter",
      props: { title, via: "PesaYetu", related: ["Code4Africa"] },
    },
    {
      name: "LinkedIn",
      props: {
        summary: title,
        source: process.env.NEXT_PUBLIC_APP_URL,
      },
    },
    { name: "WhatsApp", props: { quote: title } },
    { name: "Email", props: { subject: title } },
  ];
  const classes = useStyles(props);

  const code = `<div>
  <style>
    .frame {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      z-index: 10;
    }
    .wrapper {
        position: relative;
        overflow: hidden;
        padding-top: 75%;
    }
    @media (max-width: 1280px) {
        .wrapper {
          padding-top: ${isCompare ? "160%" : "90%"};
        }
    @media (max-width: 768px) {
      .wrapper {
        padding-top: ${isCompare ? "160%" : "100%"};
      }
    @media (max-width: 620px) {
      .wrapper {
        padding-top: ${isCompare ? "200%" : "120%"};
      }
      @media (max-width: 500px) {
        .wrapper {
          padding-top: ${isCompare ? "300%" : "170%"};
        }
}
</style> 
<div class="wrapper"><iframe class="frame" 
  src="${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}"></iframe></div></div>
  `;

  return (
    <Grid container className={classes.root}>
      {shareData.map((social) => (
        <Grid item xs={4} key={social.name}>
          <ShareButton
            name={social.name}
            // title={title}
            url={url}
            {...social.props}
          />
        </Grid>
      ))}
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Embed on your website:</Typography>
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <TextField
          value={code}
          InputProps={{ classes: { input: clsx(classes.code, classes.text) } }}
        />
      </Grid>
    </Grid>
  );
}

Share.propTypes = {
  title: PropTypes.string,
  view: PropTypes.shape({
    toImageURL: PropTypes.func,
    data: PropTypes.func,
  }),
  geoCode: PropTypes.string,
  indicatorId: PropTypes.number,
  isCompare: PropTypes.bool,
};

Share.defaultProps = {
  view: undefined,
  title: undefined,
  geoCode: undefined,
  indicatorId: undefined,
  isCompare: undefined,
};

export default Share;
