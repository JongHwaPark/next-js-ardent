const { gql } =  require('apollo-server')
const dataSources = require('../dataSources');

module.exports = () => {
    const typeDefs = gql`
    scalar JSON
    `
    
    const resolvers = {
        Query: {
            images: (_, __, context) => {
                console.log('context', context);
              return dataSources().imageAPI.loadImages()
            },
        },
    }
    
    return {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
}