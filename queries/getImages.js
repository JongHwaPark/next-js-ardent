import { gql } from 'apollo-boost';

const GET_DATA = gql`
    query ExampleQuery {
        images
    }
`;

export default GET_DATA;