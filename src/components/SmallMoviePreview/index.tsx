import { Container, ImageContainer, Image, Title, Premiere } from './styles';
import NextLink from 'next/link';

import type { SmallMoviePreviewProps } from './types';
import { URL } from '@/common/const/url';
import Rating from '../Rating';

export default function SmallMoviePreview({
  poster_path,
  id,
  title,
  release_date,
  rating,
  onClick,
}: SmallMoviePreviewProps): JSX.Element {
  return (
    <Container>
      <NextLink href={'/movie/' + id}>
        <ImageContainer>
          <Image src={URL.imageUrl + poster_path} alt={title} onClick={onClick} />
        </ImageContainer>
        <Title>{title}</Title>
        <Premiere>{release_date}</Premiere>
        {rating && <Rating rating={rating} onClick={() => {}} />}
      </NextLink>
    </Container>
  );
}
