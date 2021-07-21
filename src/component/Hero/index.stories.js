/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Hero from '.';

import image from '@/pesayetu/assets/images/sat-mtKenya-2@2x.png';

export default {
  title: 'Section/Hero',
  decorators: [withNextRouter],
  argTypes: {
    tagline: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template = ({ ...args }) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  intro: 'Stories',
  title: 'Data-driven news and insights',
  tagline:
    'Explore these curated stories showcasing how you can create impactful and informative pieces using data visualisations.',
  image,
};
