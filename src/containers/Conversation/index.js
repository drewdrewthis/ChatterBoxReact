/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Mutation } from 'react-apollo';
import MessageList from 'components/MessageList';
import AddMessage from './AddMessage';
import styles from './conversation.module.scss';

const Conversation = (props) => {
  const {
    id,
    userId,
    loading,
    messages,
    className,
  } = props;

  if (loading) { return null; }

  const classes = cx(
    styles.conversation,
    className,
  );

  return (
    <div className={classes}>
      <MessageList messages={messages} className={styles['message-list']} />
      <AddMessage conversationId={id} userId={userId} />
    </div>
  );
};

Conversation.propTypes = {
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Conversation;
