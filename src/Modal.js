import {signup} from 'authService';
import React, {useState} from 'react';
import './Modal.css';

const Modal = ({isOpen, onClose}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = await signup(username, email, password);
    console.log(data); // Check response
    onClose();
  };

  return (
      <div className = "modal-overlay" onClick = {onClose}>
          <div className ="modal-content" onClick = {(e) => e.stopPropagation()}>
          <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          <input type = "email" name = "email" placeholder ="E-mail" onChange = {(e) => setEmail(e.target.value)} required />
          <input type = "password" name = "password" placeholder ="Password" onChange = {(e) => setPassword(e.target.value)} required />
          <div className = "buttons">
            <button type = "submit">Create Account</button>
          </div><div className ="question" > Already have an account yet? </div>
          <div className="signIn">
            <span className="signIn-text" onClick={onClose}>Sign In</span>
          </div>
        </form></div>
    </div>
  );
};

export default Modal;