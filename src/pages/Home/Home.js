import { useState, useEffect } from 'react';
import { ApiTrending } from 'components/API';
import { Loader } from 'components/Loader/Loader';
import { Container, Title } from './Home.styled';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [films, seFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
     setIsLoading(true);
    const FetchTrending = async () => {
      try {
        const films = await ApiTrending();
        seFilms(films.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    FetchTrending();
  }, []);

  return (
    <main>
      <Container>
        <Title>Trending today</Title>
        {isLoading && <Loader />}
        {films && <FilmList films={films} />}
        {error && <p>Something went wrong. Try again</p>}
      </Container>
    </main>
  );
};

export default Home;
