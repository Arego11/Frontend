import '../styles/ChatLayout.css';

import React from 'react';

import BotList from './BotList';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

const ChatLayout = () => {
  return (<div className = "chat-layout"><div className = "bot-list-container">
          <BotList />
          </div>
      <div className="chat-container">
        <MessageList />
          <ChatInput /></div>
    </div>);
};

export default ChatLayout;