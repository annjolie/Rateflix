import { MainImage, Title, Description } from './styles';
import type { MainPosterProps } from './types';

export default function MainPoster({ title, overview, poster_path, className }: MainPosterProps): JSX.Element {
  return (
    <MainImage $poster_path={poster_path} className={className}>
      <Title>{title}</Title>
      <Description>{overview}</Description>
    </MainImage>
  );
}
