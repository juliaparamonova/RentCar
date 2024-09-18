import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
