import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const MESSAGE_QUERY = gql`
  query {
    allMessages {
      id
      user_id
      conversation_id
      body
      user {
        nickname
      }
    }

    allUsers {
      id
      nickname
    }
  }
`;

export default graphql(MESSAGE_QUERY, {
  props: (props) => props.data
});
