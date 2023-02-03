import { Suspense } from 'react';
import {
  Container,
  IconContainer,
  ChevronCompactLeft,
  SliderRef,
  SliderPosition,
  SmallMoviePreview,
  ChevronCompactRight,
} from './styles';
import type { MovieGroupProps } from './types';
import { useMovieSlider } from './logic';

export default function MovieGroup({ movies, className }: MovieGroupProps): JSX.Element {
  const { visibleMovies, sliderPosition, sliderRef, nextPage, prevPage } = useMovieSlider(movies, 3);

  return (
    <Container className={className}>
      <IconContainer direction="left" onClick={prevPage} aria-label="preview movie">
        <ChevronCompactLeft />
      </IconContainer>
      <SliderRef ref={sliderRef}>
        <SliderPosition style={{ left: `-${sliderPosition}px` }}>
          <Suspense fallback={<div>Loading...</div>}>
            {visibleMovies.map((movie) => (
              <SmallMoviePreview key={movie.title} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} />
            ))}
          </Suspense>
        </SliderPosition>
      </SliderRef>
      <IconContainer onClick={nextPage} direction="right" aria-label="next movie">
        <ChevronCompactRight />
      </IconContainer>
    </Container>
  );
}
