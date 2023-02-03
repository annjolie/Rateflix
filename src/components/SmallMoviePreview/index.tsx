import { Container, ImageContainer, Image, Title, Premiere } from './styles';
import NextLink from 'next/link';

import type { SmallMoviePreviewProps } from './types';

export default function SmallMoviePreview({
  poster_path,
  id,
  title,
  release_date,
  onClick,
}: SmallMoviePreviewProps): JSX.Element {
  return (
    <Container>
      <NextLink href={'/movie/' + id}>
        <ImageContainer>
          <Image src={poster_path} alt={title} onClick={onClick} />
        </ImageContainer>
        <Title>{title}</Title>
        <Premiere>{release_date}</Premiere>
      </NextLink>
    </Container>
  );
}
