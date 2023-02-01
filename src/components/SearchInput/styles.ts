import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CustomInput = styled.input`
  color: ${({ theme }) => theme.colors.textDarkStrong}

  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 1rem;
  line-height: 1.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutralN200};

  border-radius: 0.5rem;

  transition: ease-out 300ms;
  padding-block: 10px;
  padding-inline: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDarkSubtle};
  }

  :focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary600};
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focusRingPrimary};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
