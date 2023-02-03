import { Container, ImageContainer, Image, Title, Premiere } from './styles';
import type { SmallMoviePreviewProps } from './types';

export default function SmallMoviePreview({
  poster_path,
  title,
  release_date,
  onClick,
  className,
}: SmallMoviePreviewProps): JSX.Element {
  return (
    <Container className={className}>
      <ImageContainer>
        <Image src={poster_path} alt={title} onClick={onClick} />
      </ImageContainer>
      <Title>{title}</Title>
      <Premiere>{release_date}</Premiere>
    </Container>
  );
}
