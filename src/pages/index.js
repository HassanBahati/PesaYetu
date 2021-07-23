import PropTypes from "prop-types";
import React from "react";

import DataVisuals from "@/pesayetu/components/DataVisuals";
import ExploreOtherTools from "@/pesayetu/components/ExploreOtherTools";
import Page from "@/pesayetu/components/Page";
import { exploreTools, dataVisuals } from "@/pesayetu/config";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ ...props }) {
  if (props?.errorMessage) {
    return <div> {props.errorMessage}</div>;
  }
  return (
    <Page>
      <ExploreOtherTools {...exploreTools} />
      <DataVisuals {...dataVisuals} />
    </Page>
  );
}

Home.propTypes = {
  errorMessage: PropTypes.string,
};

Home.defaultProps = {
  errorMessage: undefined,
};

export async function getStaticProps() {
  const postType = "page";
  return getPostTypeStaticProps({ slug: "/" }, postType);
}
