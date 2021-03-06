import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query {
    allMessages {
      id
      user_id
      conversation_id
      body
      user {
        id
        nickname
      }
    }

    allUsers {
      id
      nickname
    }
  }
`;
