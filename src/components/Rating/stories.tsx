import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import Rating from '.';
import type { RatingProps } from './types';

export default {
  component: Rating,
  title: 'General/Rating',
  decorators: [withPadding(), withMaxWidth()],
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};
