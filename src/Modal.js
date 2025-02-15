import './Modal.css';

import React from 'react';

const Modal = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create Free Account</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Password" required />
          </label>
          <div className="buttons">
            <button type="submit">Create Account</button>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;