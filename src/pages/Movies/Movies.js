import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ApiByQuery } from 'components/API';
import SearchFilmsForm from 'components/SearchForm/SearchForm';
import FilmList from 'components/FilmList/FilmList';
import { NotFilms, Span } from './Movies.styled';

const Movies = () => {
  const [films, seFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams('');
  const filmName = searchParams.get('filmName');

  useEffect(() => {
    if (filmName === '') {
      return;
    }

    if (filmName !== null) {
      ApiByQuery(filmName)
        .then(resolve => {
          let result = resolve.data.results;
          setIsLoading(true);
          if (result.length < 1) {
            setIsEmpty(true);
            return;
          } else {
            seFilms(result);
            setIsEmpty(false);
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [filmName]);

  const handleFormSubmit = filmName => {
    const nextFilmName = filmName !== '' ? { filmName } : {};
    setSearchParams(nextFilmName);
    seFilms([]);
  };

  return (
    <main>
      <SearchFilmsForm onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {films && <FilmList films={films} />}
      {isEmpty && (
        <NotFilms>
          Sorry, we did not find a movie with the title <Span>{filmName}</Span>
        </NotFilms>
      )}
      {error && <p>Something went wrong. Try again</p>}
    </main>
  );
};

export default Movies;
