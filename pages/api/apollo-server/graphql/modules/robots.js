const { gql } =  require('apollo-server')
const robots = require('../../database/robots.json');

module.exports = () => {

    const typeDefs = gql`    
    type Pose {
        x: Float!
        y: Float!
        degree: Float!
    }
      
    type Battery {
        voltage: Float!
        current: Float!
        percent: Float!
        chargeTime: Float!
        dischargeTime: Float!
        temperature: Float!
    }    
    
    type Status {
        pose: Pose!
        schedule: [Pose]!
        battery: Battery!
    }

    type Robot {
        name: String!
        id: String!
        ip: String!
        ping: Float!
        status: Status!
    }

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
    `

    const resolvers = {
        Query: {
            robot: (_, { id }, datasoruce) => {
                console.log(datasoruce);
                return robots.filter(robot => robot.id === id)[0];
            },
            robots: () => robots,
        
        },
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
    }

    return {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
}