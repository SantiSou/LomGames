import React, { useState, useCallback } from 'react';

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const onMessageChange = useCallback(event => setMessage(event.target.value), [setMessage]);
  const onSend = useCallback(() => {
    messages.push(message);
    setMessages(messages);
    setMessage('');
  }, [message, messages, setMessages, setMessage]);

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
          onChange={onMessageChange}
          value={message}
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-secondary" onClick={onSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
