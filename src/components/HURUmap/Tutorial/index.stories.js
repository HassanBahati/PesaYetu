import { RichTypography } from "@commons-ui/core";
import React from "react";

import Tutorial from "@/pesayetu/components/HURUmap/Tutorial";
import { tour } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/Tutorial",
  argTypes: {},
};

const Template = ({ sampleElements, ...args }) => (
  <>
    <Tutorial {...args} />
    {sampleElements.map((sample) => (
      <RichTypography>{sample}</RichTypography>
    ))}
  </>
);

export const Default = Template.bind({});

Default.args = tour;