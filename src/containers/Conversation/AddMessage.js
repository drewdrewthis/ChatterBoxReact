/* eslint-disable react/prop-types */
import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_MESSAGE } from 'graphql/mutations/messages';
import styles from './conversation.module.scss';

const AddMessage = (props) => {
  let input;

  const {
    userId,
    conversationId,
  } = props;

  return (
    <Mutation mutation={ADD_MESSAGE}>
      {(addMessage, { data }) => (
        <form
          className={styles['input-container']}
          onSubmit={(e) => {
            const variables = {
              user_id: userId,
              conversation_id: conversationId,
              body: input.value,
            };

            e.preventDefault();
            addMessage({ variables });
            input.value = '';
          }}
        >
          <input
            className={styles.input}
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      )}
    </Mutation>
  );
};

export default AddMessage;
