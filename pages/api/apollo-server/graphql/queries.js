const { gql } = require('apollo-server');

module.exports = () => {
    // General Query Definition (Root Type)
    const typeDefs = gql`
    type Query {
        robots: [Robot!]!
        robot(id: String!): Robot
        images: [JSON]
    }`;

    return {
        typeDefs,
    }
}
