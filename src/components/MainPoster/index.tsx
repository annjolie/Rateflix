import { MainImage, Title, Description } from './styles';
import type { MainPosterProps } from './types';

export default function MainPoster({ title, description, image, className }: MainPosterProps): JSX.Element {
  return (
    <MainImage $image={image}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </MainImage>
  );
}
