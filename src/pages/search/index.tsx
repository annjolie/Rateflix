import { Title } from './styles';
import { useLogic } from './logic';
import MovieGroup from '@/components/MovieGroup';

export default function Movie() {
  const { movies } = useLogic();
  return (
    <>
      <main>
        {movies.length === 0 ? <Title>No se encontraron resultados</Title> : <MovieGroup movies={movies} />}
      </main>
    </>
  );
}
