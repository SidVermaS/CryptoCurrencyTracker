import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import NavBar from '../components/NavBar';
import Fallback from '../components/Fallback';
const App = (): React.JSX.Element => {
  return (
    <>
      <NavBar />
      <main className="pt-12 md:pt-16">
        <React.Suspense fallback={<Fallback />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                Component={route.component}
              />
            ))}
          </Routes>
        </React.Suspense>
      </main>
    </>
  );
};

export default App;
