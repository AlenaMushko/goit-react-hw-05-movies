import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'SharedLayout/SharedLayout';
import { PAGE_NAMES } from 'router/paths';
import Error from './Error/Error';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const InfoFilms = lazy(() => import('../pages/InfoFilms/InfoFilms'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homePage} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.moviesPage} element={<Movies />} />
          <Route path={PAGE_NAMES.filmInfo} element={<InfoFilms />}>
            <Route path={PAGE_NAMES.cast} element={<Cast />} />
            <Route path={PAGE_NAMES.review} element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
