import { useEffect, useState } from 'react';
import { searchMovies } from '@/axios';
import { SEARCH_KEY } from '@/common/const/constants';
import createPersistedState from 'use-persisted-state';
import { SmallMoviePreviewProps } from '@/components/SmallMoviePreview/types';

const useSearchMovieState = createPersistedState(SEARCH_KEY);

export const useLogic = () => {
  const [searchMovieQuery] = useSearchMovieState('');
  const [movies, setMovies] = useState<SmallMoviePreviewProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      console.log(searchMovieQuery);
      const { data } = await searchMovies(searchMovieQuery, 1);
      setMovies(data ? data.results : []);
    }
    fetchData();
  }, [searchMovieQuery]);

  return {
    movies,
  };
};
