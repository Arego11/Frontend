import './App.css';

import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Menu from "./Menu";
import Modal from "./Modal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Slideshow from "./Slideshow";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupData, setSignupData] =
      useState({username : '', email : '', password : ''});

  const openModal = () => { setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); };

  return (
    <div className="App">
      <header className="App-header">
        <button className="create-account-button" onClick={openModal}>Create Free Account</button>
        <button className="login-button">Login</button>
      </header>
      <Menu /> 
      <Slideshow />
      <Modal isOpen={isModalOpen} onClose={closeModal} setSignupData={
    setSignupData} />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup signupData={signupData} />} />
          <Route path="/login" element={
    <Login />} />
        </Routes>
      </Router>
      <main>
        <section>
          <h2>Section 1</h2>
          <p>This is some content for section 1.</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>This is some content for section 2.</p>
        </section>
        <section>
          <h2>Section 3</h2>
          <p>This is some content for section 3.</p>
        </section>
      </main>
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;