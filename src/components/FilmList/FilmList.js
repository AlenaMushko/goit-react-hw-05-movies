import { Container, List, Item, Img, FilmTitle, Box } from './FilmList.styled';
import noPhoto from '../../img/noPhoto .png';
import { generatePath, Link } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

const FilmList = ({ films }) => {
  return (
    <Container>
      <List>
        {films.map(({ id, poster_path, title, vote_average }) => (
          <Item key={id}>
            <Link to={generatePath(PAGE_NAMES.filmInfo, { id })}>
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
