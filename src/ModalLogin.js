import './ModalLogin.css';

import {login} from 'authService';
import React, {useState} from 'react';

const ModalLogin = ({isOpen, onClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log(data); // Check response

      if (data.token) {
        localStorage.setItem("token", data.token); // Save token
      }
      onClose();
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <div className="buttons">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;