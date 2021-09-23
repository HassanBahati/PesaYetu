import React from "react";

import ChartFilter from "@/pesayetu/components/HURUmap/ChartFilter";

export default {
  title: "Components/HURUmap/ChartFilter",
  argTypes: {},
};

const Template = (args) => <ChartFilter {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Select a value",
};
