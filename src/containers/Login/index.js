import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Cookie from 'js-cookie';
import { ADD_USER } from 'graphql/mutations/users';
import styles from './login.module.scss';

class Login extends React.Component {
  render() {
    let input;
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { error, data }) => {
          if(data) {
            this.props.login(data.createUser)
          }
          return (
            <div className={styles['input-container']}>
              <form
                className={styles['input-wrapper']}
                onSubmit={e => {
                  const variables = {
                    nickname: input.value
                  };

                  e.preventDefault();
                  addUser({ variables });
                  input.value = 'user';
                }}
              >
                <input
                  className={styles.input}
                  ref={node => {
                    if (!node) { return }
                    input = node;
                    input.value = 'User' + new Date().getTime();
                  }}
                />
                <button type="submit" className={styles.button}>Submit</button>
                {error && <p className={styles.error}>{`Username already taken.`}</p>}
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default Login;
