import {
  Container,
  List,
  Title,
  Item,
  Img,
  FilmTitle,
  Box,
} from './FilmList.styled';

const FilmList = visibleFilms => {
  return (
    <Container>
      <Title>We found these movies based on your request</Title>
      <List>
        {visibleFilms.map(({ id, poster_path, title, vote_average }) => (
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
    </Container>
  );
};

export default FilmList;
