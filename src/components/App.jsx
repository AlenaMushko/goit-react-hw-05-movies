import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

// const ProductDetails = lazy(() => import("../pages/ProductDetails"));
// const Products = lazy(() => import("../pages/Products"));
// const Mission = lazy(() => import("./Mission"));
// const Team = lazy(() => import("./Team"));
// const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
