import { useState, useEffect } from 'react';

import { ApiTrending } from 'components/API';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  List,
  Title,
  Item,
  Img,
  FilmTitle,
  Box,
} from './Home.styled';

const Home = () => {
  const [films, seFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const FetchTrending = async () => {
      try {
        setIsLoading(true);
        const films = await ApiTrending();
        seFilms(films);
        console.log(films);
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
        {films && (
          <List>
            {films.map(({ id, poster_path, title, vote_average }) => (
              <Item key={id}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <FilmTitle>{title}</FilmTitle>
                <Box>{vote_average}</Box>
              </Item>
            ))}
          </List>
        )}
        {error && <p>Something went wrong. Try again</p>}
      </Container>
    </main>
  );
};

export default Home;
