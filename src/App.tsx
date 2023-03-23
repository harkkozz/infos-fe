import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from 'router/MainRouter';

import store from 'store/store';

import { createClient } from 'apollo/client';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  const client = createClient();

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
