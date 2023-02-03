import { MainImage, Title, Description } from './styles';
import NextLink from 'next/link';

import type { MainPosterProps } from './types';

export default function MainPoster({ title, overview, poster_path, id }: MainPosterProps): JSX.Element {
  return (
    <NextLink href={'/movie/' + id}>
      <MainImage $poster_path={poster_path}>
        <Title>{title}</Title>
        <Description>{overview}</Description>
      </MainImage>
    </NextLink>
  );
}
