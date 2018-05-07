import gql from 'graphql-tag';

export const ADD_MESSAGE = gql`
  mutation addMessage(
    $user_id: ID!,
    $conversation_id: ID!,
    $body: String!
  ){
    createMessage(
      user_id: $user_id,
      conversation_id: $conversation_id,
      body: $body
    ) {
      id
      user {
        id
        nickname
      }
      conversation_id
      body
    }
  }
`;
