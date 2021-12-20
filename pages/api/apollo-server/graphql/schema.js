const { makeExecutableSchema } = require("@graphql-tools/schema");

module.exports = (pubsub) => {
    const queries = require("./queries")(); 
    const subscriptions = require('./subscriptions')(pubsub);
    
    const images = require("./modules/images")();
    const robots = require("./modules/robots")();
    
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