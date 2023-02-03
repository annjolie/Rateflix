import { URL } from '@/common/const/url';
import { MovieType } from '@/common/types/movieType';
import { PaginationResponseType } from '@/common/types/paginationResponseType';
import axios from 'axios';

const instance = axios.create({
  baseURL: URL.apiUrl,
  params: { api_key: URL.apiKey, language: 'en-US' },
  timeout: 1000,
});

console.log(process.env.API_URL, process.env.API_KEY);

type AxiosError = {
  data: null;
  error: Error;
};

const handleAxiosError = (error: Error): AxiosError => ({
  data: null,
  error,
});

export const getPopularMovies = async (): Promise<{ data: PaginationResponseType<MovieType> } | AxiosError> =>
  instance
    .get('/movie/popular')
    .then(({ data }) => ({ data }))
    .catch((error) => handleAxiosError(error));

export const getGenres = async (): Promise<{ data: any } | AxiosError> =>
  instance
    .get('/genre/movie/list')
    .then(({ data }) => ({ data }))
    .catch((error) => handleAxiosError(error));

export const searchMovies = async (
  query: string,
  page: number,
): Promise<{ data: PaginationResponseType<MovieType> } | AxiosError> => {
  console.log(instance.defaults);
  return instance
    .get('/search/movie', { params: { query, page } })
    .then(({ data }) => data)
    .catch((error) => handleAxiosError(error));
};

export const createGuestSession = async (): Promise<any | AxiosError> => {
  instance
    .get('/authentication/guest_session/new')
    .then(({ data }) => data)
    .catch((error) => handleAxiosError(error));
};

export const rateMovie = async (movieId: number, rating: number, guestSessionId: string): Promise<any | AxiosError> => {
  instance
    .post(`/movie/${movieId}/rating`, { value: rating }, { params: { guest_session_id: guestSessionId } })
    .then(({ data }) => data)
    .catch((error) => handleAxiosError(error));
};
