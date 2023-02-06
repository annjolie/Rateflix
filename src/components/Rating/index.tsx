import ReactStars from 'react-stars';
import React from 'react';
import theme from '@/styles/theme';
import { RatingProps } from './types';

export default function Rating({ rating, onClick }: RatingProps): JSX.Element {
  return (
    <ReactStars
      count={10}
      value={rating}
      color1={theme.light.colors.white}
      color2={theme.light.colors.red}
      size={16}
      half={true}
      onChange={onClick}
    />
  );
}
