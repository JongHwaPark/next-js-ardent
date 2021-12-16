const fs = require('fs');
const path = require('path');
const robots = require('../database/robots.json');
const GraphQLJSON = require('graphql-type-json');

module.exports = {
  Query: {
    robots: () => robots,
    robot: (_, { id }) => {
      return robots.filter(robot => robot.id === id)[0];
    },
    images: (_, __, { dataSources }) => {
      return dataSources.imageAPI.loadImages()
    },
  },
  JSON: GraphQLJSON,

  Mutation: {
    updateName: (_, { id, name }) => {
      const target = robots.find(robot => robot.id === id);
      if (target) {
        target.name = name;
        fs.writeFileSync(path.join(__dirname, '../database/robots.json'), JSON.stringify(robots, null, 2));
        return target;
      }
      return null;
    },

    updateStatus: (_, { id, ip, status }) => {
      const target = robots.find(robot => robot.id === id);
      if (target) {
        target.ip = ip;
        target.ping = new Date().getTime();
        target.status = status;
        fs.writeFileSync(path.join(__dirname, '../database/robots.json'), JSON.stringify(robots, null, 2));
        return target;
      }

      const newRobot = {
        name: `anony ${new Date().getTime() % 10000}`,
        id,
        ip,
        ping: new Date().getTime(),
        status,
      }
      robots.push(newRobot);
      fs.writeFileSync(path.join(__dirname, '../database/robots.json'), JSON.stringify(robots, null, 2));
      return newRobot;
    }
  }
};
