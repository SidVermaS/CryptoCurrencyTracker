import React from 'react';

export type RouteI = {
  path: string;
  component: React.LazyExoticComponent<() => React.JSX.Element>;
};
