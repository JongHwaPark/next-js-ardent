const { gql } = require('apollo-server');

module.exports = function (pubsub) {
  const typeDefs = gql`
      type Subscription {
        robots: [Robot]
      }
  `;

  const resolvers = {
    Subscription: {
      robots: {
        subscribe: (_, __, context) => {
          return pubsub.asyncIterator(["robots"])
        }
      },
    }
  };

  return {
    typeDefs,
    resolvers,
  }
}
