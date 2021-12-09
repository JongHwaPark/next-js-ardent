import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: 'http://127.0.0.1:4000/',
    cache: new InMemoryCache()
  });

export default client;

// import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { withApollo } from 'next-with-apollo';

// export default withApollo(
//   ({ initialState }) =>
//     new ApolloClient({
//       cache: new InMemoryCache().restore(initialState || {}),
//       uri: 'http://localhost:4000/',
//     })
// );