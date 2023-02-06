import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0.375rem;
  width: 7.5rem;
  color: ${({ theme }) => theme.colors.white};
  transition: color ease-out 150ms;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.red};
  }
`;
