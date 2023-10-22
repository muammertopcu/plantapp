import React from 'react';
import Router from './router/Router';
import ReduxProvider from './store/ReduxProvider';

export const App = () => {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
};

export default App;
