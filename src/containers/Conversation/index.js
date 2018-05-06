import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Mutation } from 'react-apollo';
import MessageList from 'components/MessageList';
import styles from './conversation.module.scss';
import { ADD_MESSAGE } from 'graphql/mutations/messages';

const AddMessage = (props) => {
  let input;

  const {
    userId,
    conversationId
  } = props;

  return (
    <Mutation mutation={ADD_MESSAGE}>
      {(addMessage, { data }) => (
        <form
          className={styles['input-container']}
          onSubmit={e => {
            const variables = {
              user_id: userId,
              conversation_id: conversationId,
              body: input.value
            };

            e.preventDefault();
            addMessage({ variables });
            input.value = "";
          }}
        >
          <input
            className={styles.input}
            ref={node => {
              input = node;
            }}
          />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      )}
    </Mutation>
  );
};

class Conversation extends React.PureComponent {
  render() {
    const {
      // id,
      loading,
      messages,
      className,
    } = this.props;

    if (loading) { return null; }

    const classes = cx(
      styles.conversation,
      className
    );

    const user_id = 5;
    const id = messages[0].conversation_id;

    return (
      <div className={classes}>
        <MessageList messages={messages} className={styles['message-list']}/>
        <AddMessage conversationId={id} userId={user_id} />
      </div>
    );
  }
}

Conversation.propTypes = {
  updateUserFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
};

export default Conversation;
