import PropTypes from 'prop-types';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import { Container, List, Item, Img, FilmTitle, Box } from './FilmList.styled';
import noPhoto from '../../img/noPhoto .png';


const FilmList = ({ films }) => {
    const location = useLocation();
  return (
    <Container>
      <List>
        {films?.map(({ id, poster_path, title, vote_average }) => (
          <Item key={id}>
            <Link to={generatePath(PAGE_NAMES.filmInfo, { id })} state={{from: location}}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : `${noPhoto}`
                }
                alt={title}
              />
              <FilmTitle>{title}</FilmTitle>
              <Box>{vote_average}</Box>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default FilmList;
FilmList.prototype = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
     title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ).isRequired,
};
