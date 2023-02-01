import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CustomInput = styled.input`
  color: ${({ theme }) => theme.colors.supportRedLight};

  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 1rem;
  line-height: 1.5rem;

  background-color: ${({ theme }) => theme.colors.textLightWeakSuperPlus};
  border: 1px solid ${({ theme }) => theme.colors.neutralN200};

  border-radius: 0.5rem;

  transition: ease-out 300ms;
  padding-block: 10px;
  padding-inline: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutralN300};
  }

  :focus:not(:disabled) {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focusRingDestructive};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
