import { testMovie } from '@/common/const/movies';
import MainPoster from '@/components/MainPoster';
import Rating from '@/components/Rating';
import Head from 'next/head';
import { Rate, Text } from './styles';

export default function Home() {
  const movie = testMovie;
  return (
    <>
      <Head>
        <title>Rateflix - Movie details</title>
      </Head>
      <main>
        <MainPoster {...movie} />
        <Rate>
          Valorar: <Rating />
        </Rate>
        <Text>Titulo original: {movie.original_title}</Text>
        <Text>Fecha de estreno: {movie.release_date}</Text>
        <Text>Lenguaje original: {movie.original_language}</Text>
        <Text>Generos: {movie.genre_ids}</Text>
        <Text>Clasificación: {movie.adult}</Text>
        <Text>Popularidad: {movie.popularity}</Text>
        <Text>Votos: {movie.vote_count}</Text>
        <Text>Trailer: {movie.video}</Text>
        <Text>Lenguaje original: {movie.original_language}</Text>
      </main>
    </>
  );
}
