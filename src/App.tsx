import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { createClient } from 'apollo/client';
import { BASENAME } from 'router/constants';
import MainRouter from 'router/MainRouter';

const App: React.FC = () => {
  const client = createClient();

  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={BASENAME}>
        <MainRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
