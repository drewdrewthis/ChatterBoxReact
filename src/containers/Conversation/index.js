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
      id,
      messages,
      className,
      userId,
    } = this.props;

    if (!messages || !messages.length) { return null; }

    const classes = cx(
      styles.conversation,
      className
    );

    return (
      <div className={classes}>
        <MessageList messages={messages} className={styles['message-list']}/>
        <AddMessage conversationId={id} userId={userId} />
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
