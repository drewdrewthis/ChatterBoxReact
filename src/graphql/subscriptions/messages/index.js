import gql from 'graphql-tag';

export const MESSAGE_SUBSCRIPTION = gql`
  subscription onMessageAdded {
    messageWasAdded {
      id
      user_id
      conversation_id
      body
      user {
        nickname
      }
    }
  }
`;
