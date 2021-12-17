const { makeExecutableSchema } = require("@graphql-tools/schema");

const queries = require("./queries"); 
const mutations = require("./mutations"); 

const images = require("./modules/images");
const robots = require("./modules/robots");
const status = require("./modules/status");


const typeDefs = [
    images.typeDefs,
    robots.typeDefs,
    status.typeDefs,

    queries.typeDefs,
    mutations.typeDefs,
];
const resolvers = [
    images.resolvers,
    robots.resolvers,
    status.resolvers,

    queries.resolvers,
    mutations.resolvers,
];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
  

module.exports = schema;