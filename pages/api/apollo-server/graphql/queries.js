const { gql } = require('apollo-server');

// General Query Definition (Root Type)
const typeDefs = gql`
type Query {
    robots: [Robot!]!
    robot(id: String!): Robot
    images: [JSON]
}`;

const resolvers = {
    Query: {
        robots: (_, __, {dataSources}) => dataSources.robots,
        robot: (_, { id }, { dataSources}) => {
            const robots = dataSources.robots;
            return robots.filter(robot => robot.id === id)[0];
        },
        images: (_, __, { dataSources }) => {
        return dataSources.imageAPI.loadImages()
        },
    }
};

module.exports = {
    typeDefs,
    resolvers,
}
