import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import SmallMoviePreview from '.';
import type { SmallMoviePreviewProps } from './types';

export default {
  component: SmallMoviePreview,
  title: 'General/SmallMoviePreview',
  decorators: [withPadding(), withMaxWidth()],
  args: {
    image: 'https://es.web.img3.acsta.net/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27',
    title: 'El padrino',
    premiere: '1972',
  },
} as Meta;

const Template: Story<SmallMoviePreviewProps> = (args) => <SmallMoviePreview {...args} />;

export const Default = Template.bind({});
Default.args = {};
