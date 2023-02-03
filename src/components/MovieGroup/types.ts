import { SmallMoviePreviewProps } from '../SmallMoviePreview/types';

export type MovieGroupProps = {
  movies: SmallMoviePreviewProps[];
  className?: string;
};

export type ArrowStylesProps = {
  direction: 'left' | 'right';
};
