import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { PAGE_NAMES } from 'router/paths';
import Error from './Error/Error';


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const InfoFilms = lazy(() => import("../pages/InfoFilms/InfoFilms"));
const Cast = lazy(() => import("../pages/Cast/Cast"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path={PAGE_NAMES.homePage} element={<Home />} />
          <Route path={PAGE_NAMES.moviesPage} element={<Movies />} />
          <Route path={PAGE_NAMES.filmInfo} element={<InfoFilms />}>
            <Route path="cast" element={<Cast />} />
            <Route path={PAGE_NAMES.review} element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};
