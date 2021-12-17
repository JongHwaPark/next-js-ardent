const { gql } =  require('apollo-server')

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


module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}