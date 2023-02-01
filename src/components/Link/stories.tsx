import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import Link from '.';
import type { LinkProps } from './types';

export default {
  component: Link,
  title: 'General/Link',
  decorators: [withPadding(), withMaxWidth()],
  args: {
    href: '/',
    label: 'Mis valoraciones',
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
