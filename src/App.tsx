import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { createClient } from 'apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { BASENAME } from 'router/constants';
import MainRouter from 'router/MainRouter';

import { useModalStore } from 'store/modal';

import CustomModal from 'components/CustomModal/CustomModal';

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
