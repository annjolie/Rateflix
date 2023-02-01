import { Container, ImageContainer, Image, Title, Premiere } from './styles';
import type { SmallMoviePreviewProps } from './types';

export default function SmallMoviePreview({
  image,
  title,
  premiere,
  onClick,
  className,
}: SmallMoviePreviewProps): JSX.Element {
  return (
    <Container className={className}>
      <ImageContainer>
        <Image src={image} alt={title} onClick={onClick}/>
      </ImageContainer>
      <Title>{title}</Title>
      <Premiere>{premiere}</Premiere>
    </Container>
  );
}
