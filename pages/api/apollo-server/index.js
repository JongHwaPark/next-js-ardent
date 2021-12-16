const ApolloServer = require('apollo-server').ApolloServer;
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const dataSources = require('./graphql/dataSources');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// listen 함수로 웹 서버 실행
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
