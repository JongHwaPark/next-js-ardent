import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';

class GqlClient {
  constructor() {
    this.init();
  }

  init() {
    try {
      const wsLink = new WebSocketLink({
        uri: `ws://localhost:4000/graphql`,
        options: {
            reconnect: true,
        },
      });
      
      this.client = new ApolloClient({
          uri: 'http://localhost:4000',
          cache: new InMemoryCache(),
          link: wsLink
      });
    } catch (err) {
      console.log(err);
    }
  }

  getClient(){
    return this.client;
  }

}

export default new GqlClient();
