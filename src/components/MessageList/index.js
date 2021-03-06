import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './message-list.module.scss';

const renderMessage = message => (
  <li key={message.id}>
    <div className={styles.user}>{message.user.nickname}</div>
    <div className={styles.message}>{ message.body }</div>
  </li>
);

const MessageList = (props) => {
  const {
    messages,
    className,
  } = props;

  const classes = cx(
    styles['message-list'],
    className,
  );

  return (
    <ol className={classes}>
      { messages.map(renderMessage) }
    </ol>
  );
};

MessageList.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MessageList;
