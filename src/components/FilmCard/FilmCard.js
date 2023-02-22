import { generatePath, NavLink } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import noPhoto from '../../img/noPhoto .png';
import { FilmItem, FilmTitle, Img, Wraper } from './FilmCard.styled';

const FilmCard = ({ film }) => {
  const {id, poster_path, title, release_date, vote_average, overview, genres } =
    film;
  const releaseYear = release_date.split('-')[0];
  const genresName = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <Wraper>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `${noPhoto}`
          }
          alt={title}
        />
        <div>
          <FilmTitle>
            {title} ({releaseYear})
          </FilmTitle>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresName}</p>
        </div>
      </Wraper>
      <div>
        <hr />
        <h2>Additional information</h2>
        <ul>
          <NavLink to={generatePath(PAGE_NAMES.cast, { id })} style={({ isActive }) => ({
              color: isActive ? 'rgb(165, 14, 14)' : 'whitesmoke',
            })}>
            <FilmItem><h3>Cast</h3> </FilmItem>
          </NavLink>
          <NavLink to={generatePath(PAGE_NAMES.review, { id })} style={({ isActive }) => ({
              color: isActive ? 'rgb(165, 14, 14)' : 'whitesmoke',
            })}>
            <FilmItem><h3>Reviews</h3></FilmItem>
          </NavLink>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default FilmCard;
