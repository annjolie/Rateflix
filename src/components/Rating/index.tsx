import ReactStars from 'react-stars';
import React from 'react';
import theme from '../../styles/theme';
import { RatingProps } from './types';

export default function Rating({ className }: RatingProps): JSX.Element {
  console.log({className})
  return (
    <ReactStars
      className={className}
      count={5}
      value={0}
      color1={theme.light.colors.white}
      color2={theme.light.colors.red}
      size={20}
      half={true}
      onChange={(rating) => console.log(rating)}
    />
  );
}
