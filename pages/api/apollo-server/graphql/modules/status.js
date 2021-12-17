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
    `
    
    const resolvers = {
        Query: {
            robot: (_, { id }) => {
                return robots.filter(robot => robot.id === id)[0];
              },
        },
    }
    
    return {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
}