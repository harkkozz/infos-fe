import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { createClient } from 'apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from 'router/MainRouter';

import store from 'store/store';

const App: React.FC = () => {
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
