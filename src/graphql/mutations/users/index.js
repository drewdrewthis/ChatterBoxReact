import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation addUser($nickname: String!) {
    createUser(nickname: $nickname) {
      id
      nickname
    }
  }
`;
