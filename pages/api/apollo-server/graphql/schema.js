const { makeExecutableSchema } = require("@graphql-tools/schema");

module.exports = (pubsub) => {
    const queries = require("./queries")(); 
    const mutations = require("./mutations")(); 
    const subscriptions = require('./subscriptions')(pubsub);
    
    const images = require("./modules/images")();
    const robots = require("./modules/robots")();
    const status = require("./modules/status")();
    
    const typeDefs = [
        images.typeDefs,
        robots.typeDefs,
        status.typeDefs,
    
        queries.typeDefs,
        mutations.typeDefs,
        subscriptions.typeDefs,
    ];
    const resolvers = [
        images.resolvers,
        robots.resolvers,
        status.resolvers,
    
        queries.resolvers,
        mutations.resolvers,
        subscriptions.resolvers,
    ];
    
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });
         
    return schema;
}