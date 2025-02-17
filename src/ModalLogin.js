import './ModalLogin.css';

import {login} from 'authService';
import React, {useEffect, useState} from 'react';

import Modal from './Modal';

const ModalLogin = ({isOpen, onClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    onClose(); // Close the login modal
  };

  const closeModal = () => { setIsModalOpen(false); };

  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(false); // Reset the sign-up modal state when the login
                             // modal is opened
    }
  }, [ isOpen ]);

  useEffect(() => {
    if (isModalOpen) {
      onClose(); // Close the login modal when the sign-up modal is opened
    }
  }, [ isModalOpen ]);

  if (!isOpen && !isModalOpen)
    return null;

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
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <div className="buttons">
              <button type="submit">Login</button>
            </div>
            <div className="question">Don't have an account yet?</div>
            <div className="signUp">
              <span className="signUp-text" onClick={openModal}>Sign Up</span>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default ModalLogin;