import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';
import type { Meta, Story } from '@storybook/react';

import MovieGroup from '.';
import type { MovieGroupProps } from './types';

export default {
  component: MovieGroup,
  title: 'General/MovieGroup',
  decorators: [withPadding()],
  args: {
    movies: [
      {
        title: 'The Shawshank Redemption',
        premiere: '1994',
        image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      },
      {
        title: 'The Godfather',
        premiere: '1972',
        image: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
      },
      {
        title: 'The Dark Knight',
        premiere: '2008',
        image: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
      },
      {
        title: 'The Godfather: Part II',
        premiere: '1974',
        image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        premiere: '2003',
        image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      },
      {
        title: 'The Shawshank Redemption',
        premiere: '1994',
        image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      },
    ],
  },
} as Meta;

const Template: Story<MovieGroupProps> = (args) => <MovieGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};
