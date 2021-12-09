const fs = require('fs');
const probe = require('probe-image-size');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    images: [JSON]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
    Query: {
      books: () => books,
      images: (_, __, { dataSources }) => {
        return dataSources.imageAPI.loadImages()
      }
    },
    JSON: GraphQLJSON,
  };

class ImageAPI {
  loadImages(){
    const dirPath = path.join(__dirname, '../../static/images/source');
    const res = fs.readdirSync(dirPath);
    // return res
    return res.map(name => {
      const data = fs.readFileSync(path.join(dirPath, name));
      const imageData = probe.sync(data);
      return {
        ...imageData,
        data:data,
      };
    });
  
  }
}


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      imageAPI: new ImageAPI(),
    };
  },
});



server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});