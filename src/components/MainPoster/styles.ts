import styled from 'styled-components';
import { MainPosterStyledProps } from './types';

export const Container = styled.div``;

export const MainImage = styled.div<MainPosterStyledProps>`
  font-size: 1rem;
  min-height: 40.62rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.posterGradient}, url(${({ $poster_path }) => $poster_path});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 35px;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 3.12rem;
  margin-bottom: 0.4rem;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 1rem;
  line-height: 1.75rem;
  max-width: 50%;
  margin-bottom: 1.25rem;
`;
