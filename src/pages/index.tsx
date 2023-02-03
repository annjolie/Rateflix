import MainPoster from '@/components/MainPoster';
import { Title } from './styles';
import { Inter } from '@next/font/google';
import MovieGroup from '@/components/MovieGroup';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <MainPoster
          title="The Martian"
          overview="En 2035, durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata, por lo que, tras haber dado por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de … "
          poster_path="https://images.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
        />
        <Title>Peliculas populares</Title>
        <MovieGroup
          movies={[
            {
              id: 278,
              title: 'The Godfather: Part II',
              release_date: '1974',
              poster_path: 'https://images.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            },
            {
              id: 238,
              title: 'The Lord of the Rings: The Return of the King',
              release_date: '2003',
              poster_path: 'https://images.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
            },
            {
              id: 238,
              title: 'The Shawshank Redemption',
              release_date: '1994',
              poster_path: 'https://images.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            },
          ]}
        />
        <Title>Todas las peliculas</Title>
        <MovieGroup
          movies={[
            {
              id: 278,
              title: 'The Shawshank Redemption',
              release_date: '1994',
              poster_path: 'https://images.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            },
            {
              id: 238,
              title: 'The Godfather',
              release_date: '1972',
              poster_path: 'https://images.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
            },
            {
              id: 424,
              title: 'The Dark Knight',
              release_date: '2008',
              poster_path: 'https://images.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
            },
            {
              id: 240,
              title: 'The Godfather: Part II',
              release_date: '1974',
              poster_path: 'https://images.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            },
            {
              id: 497,
              title: 'The Lord of the Rings: The Return of the King',
              release_date: '2003',
              poster_path: 'https://images.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
            },
            {
              id: 680,
              title: 'The Shawshank Redemption',
              release_date: '1994',
              poster_path: 'https://images.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            },
          ]}
        />
      </main>
    </>
  );
}
