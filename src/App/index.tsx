import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = (): React.JSX.Element => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              Component={route.component}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
