import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import type { SearchInputProps } from './types';
import { SearchInput } from '.';

export default {
  component: SearchInput,
  title: 'General/SearchInput',
  decorators: [withPadding(), withMaxWidth()],
  args: {
    placeholder: 'Search movie',
  },
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
