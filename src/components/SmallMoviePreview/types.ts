import { MovieType } from '@/common/types/movieType';

export type SmallMoviePreviewProps = Pick<MovieType, 'id' | 'release_date' | 'title' | 'poster_path'> & {
  rating?: number;
  onClick?: () => void;
};
