import { SmallMoviePreviewProps } from '../SmallMoviePreview/types';

export type MovieGroupProps = {
  movies: SmallMoviePreviewProps[];
  direction: 'left' | 'right';
  className?: string;
};

export type ArrowStylesProps = {
    direction: MovieGroupProps['direction'];
};
