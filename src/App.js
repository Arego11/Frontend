// filepath: /Users/liner/Documents/casino/Frontend/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./welcome";
import Slideshow from "./Slideshow"; // Import the Slideshow component
import './App.css';

function App() {
  return (
    <div className="App">
      <Slideshow /> {/* Add the Slideshow component */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;