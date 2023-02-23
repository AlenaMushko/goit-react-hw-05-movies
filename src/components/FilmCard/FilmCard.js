import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { generatePath, NavLink, Outlet, useLocation } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import noPhoto from '../../img/noPhoto .png';
import { FilmItem, FilmTitle, Img, Wraper } from './FilmCard.styled';
const FilmCard = ({ film }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const {
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;
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
          <NavLink
            to={generatePath(PAGE_NAMES.cast, { id })}
            state={{ from: location.state?.from }}
          >
            <FilmItem>
              <h3>Cast</h3>{' '}
            </FilmItem>
          </NavLink>
          <NavLink
            to={generatePath(PAGE_NAMES.review, { id })}
            state={{ from: location.state?.from }}
          >
            <FilmItem>
              <h3>Reviews</h3>
            </FilmItem>
          </NavLink>
        </ul>
        <hr />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default FilmCard;

FilmCard.prototype = {
  film: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.number,
    })
  ).isRequired,
};
