import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { CompleteInformationFilm } from 'components/API';
import { BackLink } from 'components/BackLink/BackLink';
import { Container } from './InfoFilms.styled';
import FilmCard from 'components/FilmCard/FilmCard';

const InfoFilms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // const params = useParams();
  const { id } = useParams();
  const [infoAboutFilm, setInfoAboutFilm] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);
    CompleteInformationFilm(id)
      .then(resolve => {
        // setIsLoading(true);
        setInfoAboutFilm(resolve);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <main>
      <Container>
      {isLoading && <Loader />}
      <BackLink to={backLinkHref}>Back to films</BackLink>
        {infoAboutFilm && <FilmCard film={infoAboutFilm?.data} />}
      
        </Container>
    </main>
  );
};

export default InfoFilms;
