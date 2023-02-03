import { MovieType } from "@/common/types/movieType";

export type MainPosterProps = Pick<MovieType, 'id' | 'title' | 'overview' | 'poster_path'> & {
  className?: string;
};

export type MainPosterStyledProps = {
    $poster_path: MainPosterProps['poster_path'];
};
