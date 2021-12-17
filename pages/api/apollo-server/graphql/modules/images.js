const { gql } =  require('apollo-server')

module.exports = () => {
    const typeDefs = gql`
    scalar JSON
    `
    
    const resolvers = {
        Query: {
            images: (_, __, { dataSources }) => {
              return dataSources.imageAPI.loadImages()
            },
        },
    }
    
    return {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
}