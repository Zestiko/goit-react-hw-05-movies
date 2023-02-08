
import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SearchMovie = lazy(() => import('./components/SearchMovie/SearchMovie'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Credits = lazy(() => import('./components/Credits/Credits'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<SearchMovie />} />
            <Route path="/movie/:movieId" element={<MovieDetails />}>
              <Route path="casts" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
