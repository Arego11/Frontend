import '../styles/BotList.css';
import React from 'react';

const BotList = () => {
  const bots = [ 'Bot 1', 'Bot 2', 'Bot 3' ]; // Example bot names

  return (
    <div className="bot-list">
      <h3>Bots</h3>
      <ul>
        {bots.map((bot, index) => (
          <li key={index}>{bot}</li>
        ))}
      </ul>
    </div>
  );
}
;

export default BotList;