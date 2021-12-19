const { makeExecutableSchema } = require("@graphql-tools/schema");

module.exports = (pubsub) => {
    const queries = require("./queries")(); 
    const mutations = require("./mutations")(); 
    const subscriptions = require('./subscriptions')(pubsub);
    const dataSources = require('./dataSources')();
    
    const images = require("./modules/images")();
    const robots = require("./modules/robots")();
    const status = require("./modules/status")();
    
    const typeDefs = [
        images.typeDefs,
        robots.typeDefs,
    
        queries.typeDefs,
        subscriptions.typeDefs,
    ];
    const resolvers = [
        images.resolvers,
        robots.resolvers,
        subscriptions.resolvers,
    ];
    
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });
         
    return schema;
}