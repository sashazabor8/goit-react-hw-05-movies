import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoaderAnimation from 'components/LoaderAnimation';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
// import HomeView from 'views/HomeView';
// import MoviesPage from 'views/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'views/MovieDetailsPage';
const HomeView = lazy(() => import('views/HomeView'));
const MoviesPage = lazy(() => import('views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderAnimation />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
