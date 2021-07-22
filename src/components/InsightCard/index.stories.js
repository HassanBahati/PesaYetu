/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import InsightCard from "@/pesayetu/components/InsightCard";

export default {
  title: "Components/InsightCard",
  argTypes: {},
};

const Template = () => <InsightCard />;

export const Default = Template.bind({});

Default.args = {
  item: null,
};
