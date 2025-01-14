import { Suspense, lazy } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import  Navigation  from '../components/Navigation/Navigation';
import Loader from '../components/Loader/Loader';
//import './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CampersCatalogPage = lazy(() => import('../pages/CampersCatalogPage/CampersCatalogPage'));
const CamperDetailsPage = lazy(() => import('../pages/CamperDetailsPage/CamperDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const CamperFeatures = lazy(() => import('../components/CamperFeatures/CamperFeatures'));
const CamperReviews = lazy(() => import('../components/CamperReviews/CamperReviews'));

const App = () => {
  //const dispatch = useDispatch(); 
  //const isRefreshing = useSelector(); 

  return  (
   <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} >
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;