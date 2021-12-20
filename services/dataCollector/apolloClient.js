import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";


const wsLink =process.browser ? new WebSocketLink({
  uri: `ws://127.0.0.1:4000/graphql`,
  options: {
    reconnect: true,
  },
}) : null;

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000',
  cache: new InMemoryCache(),
  link: wsLink
});

export default client;

// import {
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/client";
// import { WebSocketLink } from '@apollo/client/link/ws';

// class GqlClient {
//   constructor() {
//     this.init();
//   }

//   init() {
//     try {
//       const wsLink = new WebSocketLink({
//         uri: `ws://localhost:4000/graphql`,
//         options: {
//             reconnect: true,
//         },
//       });
      
//       this.client = new ApolloClient({
//           uri: 'http://localhost:4000',
//           cache: new InMemoryCache(),
//           link: wsLink
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   getClient(){
//     return this.client;
//   }

// }

// export default new GqlClient();
