import ReactStars from 'react-stars';
import React from 'react';
import type { RatingProps } from './types';
import theme from '../../styles/theme';

export default function Rating({ className }: RatingProps): JSX.Element {
  return (
    <ReactStars
      className={className}
      count={5}
      value={0}
      color1={theme.light.colors.neutralN50}
      color2={theme.light.colors.primary600}
      size={20}
      half={true}
      onChange={(rating) => console.log(rating)}
    />
  );
}
