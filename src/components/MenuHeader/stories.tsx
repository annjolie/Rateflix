import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import MenuHeader from '.';
import type { MenuHeaderProps } from './types';

export default {
  component: MenuHeader,
  title: 'General/MenuHeader',
  decorators: [withPadding()],
} as Meta;

const Template: Story<MenuHeaderProps> = (args) => <MenuHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
