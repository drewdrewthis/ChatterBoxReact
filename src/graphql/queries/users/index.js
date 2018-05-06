import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const USER_QUERY = gql`
  query {
    allUsers {
      id
      nickname
    }
  }
`;

export default graphql(USER_QUERY, {
  props: (props) => props.data
});
