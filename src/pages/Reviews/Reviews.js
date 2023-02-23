import { ReviewsFilm } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Item, Span } from './Reviews.styled';
import { FcReadingEbook } from "react-icons/fc";

const Reviews = () => {
  const { id } = useParams();
  const [infoAboutFilm, setInfoAboutFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    ReviewsFilm(id)
      .then(resolve => {
        setInfoAboutFilm(resolve.data.results);
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
      {infoAboutFilm?.map(({ id, author, content }) => (         
            <Item key={id}>
              <h2><FcReadingEbook size="40"/>Author: <Span>{author}</Span></h2>
              <h2>Rreviews</h2>
              <p>{content}</p>
        </Item>
      ))}
      {infoAboutFilm?.length < 1 && <p>Sorry, there is no information</p>}
    </ul>
  );
};

export default Reviews;
