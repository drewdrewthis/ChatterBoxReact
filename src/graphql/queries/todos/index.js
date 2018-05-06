import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
      description
    }
  }
`;

export default graphql(GET_TODOS, {
  props: (props) => props.data
});
