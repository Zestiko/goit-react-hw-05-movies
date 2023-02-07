import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Credits from './components/Credits/Credits';
import Reviews from './components/Reviews/Reviews';
import Layout from './components/Layout/Layout';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/movie" element={<SearchMovie />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="casts" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
