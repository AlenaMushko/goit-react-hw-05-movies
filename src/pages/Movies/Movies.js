import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

import { ApiByQuery } from 'components/API';
import { SearchFilmsForm } from 'components/SearchForm/SearchForm';
import FilmList from 'components/FilmList/FilmList';

const Movies = () => {
  const [films, seFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!filmName) {
      return;
    }
    const FetchByQuery = async () => {
      try {
        setIsLoading(true);
        const films = await ApiByQuery(filmName);
        seFilms(films);
        console.log(films);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    FetchByQuery();
  }, [filmName]);
  console.log(searchParams);
  const updateQueryString = filmName => {
    const nextFilmName = filmName !== '' ? { filmName } : {};
    setSearchParams(nextFilmName);
  };

  // const visibleFilms = films.filter(film =>
  //   film.name.toLowerCase().includes(filmName.toLowerCase())
  // );

  return (
    <main>
      <SearchFilmsForm value={filmName} onSubmit={updateQueryString} />
      {isLoading && <Loader />}
      {films && <FilmList products={films} />}
      {error && <p>Something went wrong. Try again</p>}
    </main>
  );
};

export default Movies;
