import MainPoster from '@/components/MainPoster';
import Rating from '@/components/Rating';
import Head from 'next/head';
import { Rate, Text } from './styles';
import { useLogic } from './logic';
import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const { movie, handleRating, rating } = useLogic(parseInt(id?.toString() || '-1'));
  return (
    <>
      <Head>
        <title>Rateflix - Movie details</title>
      </Head>
      <main>
        {movie && (
          <>
            <MainPoster {...movie} />
            <Rate>
              Valorar: <Rating rating={rating} onClick={handleRating} editable={true} />
            </Rate>
            <Text>Titulo original: {movie.original_title}</Text>
            <Text>Fecha de estreno: {movie.release_date}</Text>
            <Text>Lenguaje original: {movie.original_language}</Text>
            <Text>Generos: {movie.genres?.map((g) => g.name).join(', ')}</Text>
            <Text>Clasificación: {movie.adult ? 'Adulto' : 'Todo público'}</Text>
            <Text>Popularidad: {movie.popularity}</Text>
            <Text>Votos: {movie.vote_count}</Text>
            <Text>Lenguaje original: {movie.original_language}</Text>
          </>
        )}
      </main>
    </>
  );
}
