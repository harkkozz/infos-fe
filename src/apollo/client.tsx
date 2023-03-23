import { ApolloClient, InMemoryCache, NormalizedCacheObject, from, HttpLink } from '@apollo/client';

export const createClient = () => {
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: from([
      new HttpLink({
        uri: 'http://localhost:4000/graphql'
      })
    ]),
    cache: new InMemoryCache()
  });

  return client;
};

export default createClient;
