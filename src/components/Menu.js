import '../styles/Menu.css';
import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('.main-content').classList.toggle('blurred', !isOpen);
  };

  return (
    <div className = "menu-container">
      <button className = "menu-button" onClick = {toggleMenu}>☰</button>
      <div className={`menu-tab ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#option1">Profile</a></li>
          <li><a href="#option2">Subscription</a></li>
          <li><a href="#option3">Chat</a></li>
          <li><a href="#option4">Collection</a></li>
          <li><a href="#option5">Generate</a></li>
        </ul>
      </div>
    </div>);
};

export default Menu;