const { gql } =  require('apollo-server')
const robots = require('../../database/robots.json');

const typeDefs = gql`
type Robot {
    name: String!
    id: String!
    ip: String!
    ping: Float!
    status: Status!
}
`

const resolvers = {
    Query: {
        robot: (_, { id }, datasoruce) => {
            console.log(datasoruce);
            return robots.filter(robot => robot.id === id)[0];
        },
        robots: () => robots,
      
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}