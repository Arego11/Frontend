import '../styles/MessageList.css';

import React from 'react';

const MessageList = () => {
  const messages = [
    { sender: 'Bot 1', text: 'Hello!' },
    { sender: 'User', text: 'Hi there!' },
  ]; // Example messages

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'User' ? 'user-message' : 'bot-message'}`}>
          <strong>{message.sender}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;