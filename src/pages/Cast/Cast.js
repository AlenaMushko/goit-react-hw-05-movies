import { CastFilm } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from '../../img/noPhoto .png';
import { Loader } from 'components/Loader/Loader';
import { Img, Item, Span, Wraper } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [infoAboutFilm, setInfoAboutFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CastFilm(id)
      .then(resolve => {
        setInfoAboutFilm(resolve.data.cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <ul>
      {isLoading && <Loader />}
      {infoAboutFilm?.map(({ id, character, original_name, profile_path }) => (
        <Item key={id}>
          <Wraper>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${noPhoto}`
              }
              alt={original_name}
            />
            <div>
              <h2>{original_name}</h2>
              <p>Character: <Span>{character}</Span></p>
            </div>
          </Wraper>
        </Item>
      ))}
      {infoAboutFilm?.length < 1 && <p>Sorry, there is no information</p>}
    </ul>
  );
};

export default Cast;
