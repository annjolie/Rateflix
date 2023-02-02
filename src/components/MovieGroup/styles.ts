import styled from 'styled-components';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { lazy } from 'react';
import { ArrowStylesProps } from './types';
import Preview from '../SmallMoviePreview';

const ArrowStyles = `
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  color: #F5F5F1;
  opacity: 0.6;
  transform: translateY(-50%);


:hover {
  opacity: 1;
  transition: ease-out 0.2s;
}
`;

const SliderRP = `
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
`;

export const IconContainer = styled.button<ArrowStylesProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 20rem;
  width: 5rem;
`;

export const SliderRef = styled.div`
  ${SliderRP};
`;

export const SliderPosition = styled.div`
  ${SliderRP};
`;

export const SmallMoviePreview = styled(Preview)`
  display: inline-block;
  text-align: center;
`;

export const ChevronCompactLeft = styled(BsChevronCompactLeft)`
  ${ArrowStyles};
`;

export const ChevronCompactRight = styled(BsChevronCompactRight)`
  ${ArrowStyles};
`;
