const { gql } = require('apollo-server')
const robots = require('../database/robots.json');

// General Mutation Definition (Root Type)
const typeDefs = gql`
input PoseInput {
    x: Float!
    y: Float!
    degree: Float!
}
    
input BatteryInput {
    voltage: Float!
    current: Float!
    percent: Float!
    chargeTime: Float!
    dischargeTime: Float!
    temperature: Float!
}
    
input StatusInput {
    pose: PoseInput!
    schedule: [PoseInput]!
    battery: BatteryInput!
}
    
type Mutation {
    updateName(id: String!, name: String!): Robot!
    updateStatus(id: String!, ip: String!, status: StatusInput!): Robot!
}
`;

const resolvers = {
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


module.exports = {
  typeDefs,
  resolvers,
}
