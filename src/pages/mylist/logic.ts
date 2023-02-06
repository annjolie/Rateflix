import { useEffect, useState } from 'react';
import { getMovieDetails } from '@/axios';
import { SmallMoviePreviewProps } from '@/components/SmallMoviePreview/types';
import createPersistedState from 'use-persisted-state';
import { RATED_MOVIE_LIST_KEY } from '@/axios/constants';
import { RatedMovieType } from '@/common/types/ratedMovieType';

const useRatedMovieListState = createPersistedState(RATED_MOVIE_LIST_KEY);

export const useLogic = () => {
  const [ratedMovieList] = useRatedMovieListState<RatedMovieType[]>([]);
  const [movies, setMovies] = useState<SmallMoviePreviewProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      for (const ratedMovie of ratedMovieList) {
        const { data: movieDetail } = await getMovieDetails(ratedMovie.id);
        if (movieDetail) {
          const movie: SmallMoviePreviewProps = {
            id: movieDetail.id,
            release_date: movieDetail.release_date,
            title: movieDetail.title,
            poster_path: movieDetail.poster_path,
            rating: ratedMovie.rating,
          };
          setMovies((movies) => [...movies, movie]);
        }
      }
    }
    setMovies([]);
    fetchData();
  }, [ratedMovieList]);
  return {
    movies,
  };
};
