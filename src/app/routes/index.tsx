import { FC, useEffect} from 'react';
import {
  Route,
  BrowserRouter,
  Routes as AppRoutes,
} from 'react-router-dom';
import { Home } from '../pages/home';


export const Routes: FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes>
          <Route path="/" element={<Home />} /> 
        </AppRoutes>
      </BrowserRouter>
      </>
  );
};