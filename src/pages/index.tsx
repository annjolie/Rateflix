import MainPoster from '@/components/MainPoster';
import MovieGroup from '@/components/MovieGroup';
import { Title } from './styles';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <MainPoster
          title="The Martian"
          description="En 2035, durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata, por lo que, tras haber dado por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de … "
          image="https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
        />
        <Title>Peliculas populares</Title>
        <MovieGroup
          movies={[
            {
              title: 'The Shawshank Redemption',
              premiere: '1994',
              image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            },
            {
              title: 'The Godfather',
              premiere: '1972',
              image: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
            },
            {
              title: 'The Dark Knight',
              premiere: '2008',
              image: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
            },
            {
              title: 'The Godfather: Part II',
              premiere: '1974',
              image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            },
            {
              title: 'The Lord of the Rings: The Return of the King',
              premiere: '2003',
              image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
            },
            {
              title: 'The Shawshank Redemption',
              premiere: '1994',
              image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            },
          ]}
        />
      </main>
    </>
  );
}
