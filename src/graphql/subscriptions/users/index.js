import gql from 'graphql-tag';

export const USER_SUBSCRIPTION = gql`
  subscription onUserAdded {
    userWasAdded {
      id
      nickname
    }
  }
`;
