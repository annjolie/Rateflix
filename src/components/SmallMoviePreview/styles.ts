import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 0 auto;
  gap: 0.3rem;
  opacity: 0.7;
  :hover {
    opacity: 1;
    transition: ease-out 200ms;
    }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 150px;
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.supportRedLight};
  text-align: left;
`;

export const Premiere = styled.p`
  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.supportRedLight};
  text-align: left;
  padding-block: 0.5rem;
`;
