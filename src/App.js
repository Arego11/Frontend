import './App.css';

import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Menu from "./Menu";
import Modal from "./Modal";
import ModalLogin from "./ModalLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Slideshow from "./Slideshow";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const openModal = () => { setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); };

  const openModalLogin = () => { setIsModalLoginOpen(true); };
  const closeModalLogin = () => { setIsModalLoginOpen(false); };

  return (
    <div className="App">
      <header className="App-header">
        <button className="create-account-button" onClick={openModal}>Create Free Account</button>
        <button className="login-button" onClick={openModalLogin}>Login</button>
      </header>
      <Menu />
      <div className="main-content">
        <Slideshow />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <ModalLogin isOpen={isModalLoginOpen} onClose={closeModalLogin} />
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;