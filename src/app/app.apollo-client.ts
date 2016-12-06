import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { environment } from '../environments/environment'

const networkInterface = createNetworkInterface({
  uri: `${environment.API_URL}/graphql`,
  opts: {
    credentials: 'include',
  },
});

const client = new ApolloClient({
  networkInterface
});

export { client };
