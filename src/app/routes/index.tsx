import { FC} from 'react';
import {
  Route,
  BrowserRouter,
  Routes as AppRoutes,
} from 'react-router-dom';
import { Home } from '../pages/home';
import {Home as Home2} from  '../pages';


export const Routes: FC = () => {
  return (
      <BrowserRouter>
        <AppRoutes>
          <Route path="/" element={<Home2 />} /> 
          <Route path="/home" element={<Home />} /> 
        </AppRoutes>
      </BrowserRouter>
  );
};

