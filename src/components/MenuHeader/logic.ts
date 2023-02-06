import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { ENTER_KEY, SEARCH_KEY } from '@/common/const/constants';
import createPersistedState from 'use-persisted-state';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SearchForm } from './types';

const useSearchMovieState = createPersistedState(SEARCH_KEY);

export const useLogic = () => {
  const { push } = useRouter();

  const [searchMovieQuery, setSearchMovieQuery] = useSearchMovieState('');

  const formSchema = Yup.object().shape({
    searchInput: Yup.string(),
  });

  const { register, handleSubmit, setValue } = useForm<SearchForm>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    if (searchMovieQuery) {
      setValue('searchInput', searchMovieQuery);
    }
  }, [searchMovieQuery, setValue]);

  const onSubmit = handleSubmit(
    useCallback(
      ({ searchInput }: SearchForm) => {
        console.log('submitted');
        setSearchMovieQuery(searchInput);
        push('/search');
      },
      [push, setSearchMovieQuery],
    ),
  );

  const handleSearchInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER_KEY) {
      console.log('entro');
      event.preventDefault();
      onSubmit();
    }
  };

  return {
    register,
    handleSearchInput,
  };
};
