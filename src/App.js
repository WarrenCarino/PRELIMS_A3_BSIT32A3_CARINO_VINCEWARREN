import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const Home = () => (
  <div>
    <h2>Welcome to the LYCEUM Homepage</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About LYCEUM</h2>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact Us</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <span role="img" aria-label="home">
                  🏠
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span role="img" aria-label="about">
                  📖
                </span>{" "}
                About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span role="img" aria-label="contact">
                  📞
                </span>{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 LYCEUM. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
