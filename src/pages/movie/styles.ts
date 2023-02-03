import styled from 'styled-components';

export const Container = styled.div``;

export const Rate = styled.h3`
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  gap: 0.5rem;
  margin-block: 1rem;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  padding-block: 0.5rem;
`;
