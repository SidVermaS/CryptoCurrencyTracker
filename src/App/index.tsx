import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = (): React.JSX.Element => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} Component={route.component} />
          ))}
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
