import { useCallback, useEffect, useState } from 'react';
import { createGuestSession, getGenres, getMovieDetails, rateMovie } from '@/axios';
import { MovieType } from '@/common/types/movieType';
import { GUEST_SESSION_KEY, RATED_MOVIE_LIST_KEY } from '@/axios/constants';
import { GuestSessionType } from '@/common/types/guestSessionType';
import { RatedMovieType } from '@/common/types/ratedMovieType';
import createPersistedState from 'use-persisted-state';

const useRatedMovieListState = createPersistedState(RATED_MOVIE_LIST_KEY);
const useGuestSessionState = createPersistedState(GUEST_SESSION_KEY);

const getMovieRating = (ratedMovieList: RatedMovieType[], movieId: number) => {
  const ratedMovie = ratedMovieList.find((rating) => rating.id === movieId);
  if (ratedMovie) {
    return ratedMovie.rating;
  }
  return 0;
};

export const useLogic = (movieId: number) => {
  const [ratedMovieList, setRatedMovieList] = useRatedMovieListState<RatedMovieType[]>([]);
  const [guestSession, setGuestSession] = useGuestSessionState<GuestSessionType | null>(null);
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [rating, setRating] = useState<number>(getMovieRating(ratedMovieList, movieId));

  useEffect(() => {
    const ratedMovie: RatedMovieType = ratedMovieList.find((rating: RatedMovieType) => rating.id === movieId);
    if (ratedMovie) {
      setRating(ratedMovie.rating);
    }
  }, [ratedMovieList, movieId]);

  useEffect(() => {
    async function fetchData() {
      if (movieId === -1) return;
      const { data } = await getMovieDetails(movieId);
      setMovie(data);
    }
    fetchData();
  }, [movieId]);

  const handleGuestSession = useCallback(async () => {
    if (guestSession && guestSession.expires_at > new Date().toISOString()) {
      return guestSession.guest_session_id || '';
    }
    setGuestSession(null);
    const { data: guestSessionData, error: errorGuestSession } = await createGuestSession();
    if (errorGuestSession) {
      console.log('handleGuestSession', { errorGuestSession });
      return '';
    }
    setGuestSession(guestSessionData);
  }, [guestSession, setGuestSession]);

  const handleRating = useCallback(
    async (newRating: number) => {
      const guestSessionId = await handleGuestSession();
      setRating(newRating);
      const { data, error } = await rateMovie(movieId, newRating, guestSessionId);
      if (error) {
        console.log('handleRating', { error });
        return;
      }

      if (data) {
        const newRatedList = [...ratedMovieList];
        const ratedMovie = newRatedList.find((r) => r.id === movieId);
        if (ratedMovie) {
          ratedMovie.rating = newRating;
        } else {
          newRatedList.push({ id: movieId, rating: newRating });
        }
        setRatedMovieList(newRatedList);
      }
    },
    [handleGuestSession, movieId, ratedMovieList, setRatedMovieList],
  );

  return {
    movie,
    handleRating,
    rating,
  };
};
