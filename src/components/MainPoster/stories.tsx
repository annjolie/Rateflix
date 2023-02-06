import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import MainPoster from '.';
import type { MainPosterProps } from './types';

export default {
  component: MainPoster,
  title: 'General/MainPoster',
  decorators: [withPadding()],
  args: {
    title: 'Title',
    description: 'Description',
    image:
      'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
  },
} as Meta;

const Template: Story<MainPosterProps> = (args) => <MainPoster {...args} />;

export const Default = Template.bind({});
Default.args = {};
