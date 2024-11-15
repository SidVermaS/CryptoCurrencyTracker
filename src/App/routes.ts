import React from "react";
import { RouteI } from "../types/routes";
// import HomePage from "../pages/HomePage";
// import CurrencyPage from "../pages/CurrencyPage";

const HomePage = React.lazy(() => import('../pages/HomePage'))
const CurrencyPage = React.lazy(() => import('../pages/CurrencyPage'))
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'))

const routes: RouteI[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/currency',
    component: CurrencyPage
  },
  {
    // Error 404 page
    path: '*',
    component: NotFoundPage
  }
]

export default routes