const { ApolloServer } = require("apollo-server-express");

// Subscription
const { execute, subscribe } = require("graphql");
const { createServer } = require("http");
const express = require("express");
const { SubscriptionServer } = require("subscriptions-transport-ws");

const schema = require('./graphql/schema');
const dataSources = require('./graphql/dataSources');

(async function(){
    const server = new ApolloServer({
        schema,
        dataSources,
    });
    
    await server.start();

    const app = express();
    const httpServer = createServer(app);
    server.applyMiddleware({ app });
    SubscriptionServer.create(
        {
            schema,
            execute,
            subscribe,
        },
        { server: httpServer, path: server.graphqlPath }
    );
    
    const PORT = 4000;
    httpServer.listen(PORT, () => {
        console.log(`🚀  Server ready at wqe ${PORT}${server.graphqlPath}`);
    });
      
})()

