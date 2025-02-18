import '../styles/ChatInput.css';

import React, {useState} from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    console.log('User input:', input); // Handle sending message
    setInput('');
  };

  return (
    <div className="chat-input">
      <input
  type = "text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
        />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;