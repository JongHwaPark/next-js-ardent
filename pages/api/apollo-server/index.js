const { ApolloServer } = require("apollo-server-express");
const { PubSub } = require("graphql-subscriptions");

// Subscription
const { execute, subscribe } = require("graphql");
const { createServer } = require("http");
const express = require("express");
const { SubscriptionServer } = require("subscriptions-transport-ws");


(async function(){
    const pubsub = new PubSub();

    const schema = require('./graphql/schema')(pubsub);
    const dataSources = require('./graphql/dataSources');
    
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
        startTempMonitoring();
    });
     
    const startTempMonitoring = () => {
        const monitoring = () => {
            const pubData = [{
                "name": "anony 9163",
                "id": "A46BB6F6514E",
                "ip": "192.168.1.197",
                "ping": 1639474976667,
                "status": {
                  "pose": {
                    "x": 4.110054994816434,
                    "y": 1.6756391861613174,
                    "degree": -0.029970925393072445
                  },
                  "schedule": [
                    {
                      "x": 8.914757563663018,
                      "y": 9.838086927146467,
                      "degree": -2.783492529228153
                    },
                    {
                      "x": 3.399230472190633,
                      "y": 3.8171585421083476,
                      "degree": -1.2578882777904234
                    }
                  ],
                  "battery": {
                    "voltage": 10,
                    "current": 20,
                    "percent": 40,
                    "chargeTime": 60,
                    "dischargeTime": 80,
                    "temperature": 100
                  }
                }
            }];
            pubsub.publish("robots", { robots: pubData });
            setTimeout(monitoring, 1000);
        }
        monitoring();
    }
})();