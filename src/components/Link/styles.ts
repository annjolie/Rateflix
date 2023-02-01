import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0.375rem;
  max-width: 6.25rem;
  color: ${({ theme }) => theme.colors.supportRedLight};
  transition: color ease-out 150ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;
