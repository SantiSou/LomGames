import React, { useState, useCallback } from 'react';
import { arrayOf, func, string } from 'prop-types';

const Television = ({ messages = [], onSendMessage }) => {
  const [message, setMessage] = useState('');
  const onMessageChange = useCallback(event => setMessage(event.target.value), [setMessage]);
  const onSendMessageCallback = useCallback(() => {
    onSendMessage(message);
    setMessage('');
  }, [message, onSendMessage]);
  const onEnter = useCallback(
    event => {
      if (event.keyCode == 13) {
        onSendMessageCallback();
      }
    },
    [onSendMessageCallback]
  );

  return (
    <div className="television">
      <div className="television__frame">
        {messages.map(msg => (
          <p className="television__message" key={msg}>
            {msg}
          </p>
        ))}
      </div>
      <div className="television__chat input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Message..."
          onKeyDown={onEnter}
          onChange={onMessageChange}
          value={message}
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-secondary" onClick={onSendMessageCallback}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

Television.propTypes = {
  messages: arrayOf(string),
  onSendMessage: func.isRequired
};

export default Television;
