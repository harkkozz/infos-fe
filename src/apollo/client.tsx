import {
  ApolloClient,
  defaultDataIdFromObject,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

import { Company } from 'gql/graphql';

export const createClient = () => {
  const cache = new InMemoryCache({
    dataIdFromObject: (o) => {
      if (o.__typename === 'Company') {
        const cp = o as Company;
        return `${cp.__typename}:${cp.id}`;
      }

      return defaultDataIdFromObject(o);
    }
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: from([
      new HttpLink({
        uri: 'http://localhost:4000/graphql'
      })
    ]),
    cache,
    connectToDevTools: true
  });

  return client;
};

export default createClient;
