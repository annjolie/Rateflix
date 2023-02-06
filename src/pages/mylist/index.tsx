import { Title } from './styles';
import MovieGroup from '@/components/MovieGroup';
import { useLogic } from './logic';

export default function MyList() {
  const { movies } = useLogic();
  return (
    <>
      <main>
        <Title>Mis peliculas valoradas</Title>
        <MovieGroup movies={movies} />
      </main>
    </>
  );
}
