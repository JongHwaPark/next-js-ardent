module.exports = require('apollo-server').gql`
scalar JSON

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

type Query {
  robots: [Robot!]!
  robot(id: String!): Robot
  images: [JSON]
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
`;
