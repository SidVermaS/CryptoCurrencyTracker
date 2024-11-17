import React from 'react';
import { RouteI } from '../types/routes';
// import HomePage from "../pages/HomePage";
// import CurrencyPage from "../pages/CurrencyPage";

const HomePage = React.lazy(() => import('../pages/HomePage'));
const CurrencyPage = React.lazy(
  () => import('../pages/CryptoCurrencyPage/index'),
);
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
export enum RoutePathsE {
  HomePage = '/',
  CurrencyPage = '/currency/:id',
}
const routes: RouteI[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/currency/:id',
    component: CurrencyPage,
  },
  {
    // Error 404 page
    path: '*',
    component: NotFoundPage,
  },
];

export default routes;
