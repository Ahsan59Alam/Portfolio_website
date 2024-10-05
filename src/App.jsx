import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  
                  <Header />
                  <About />
                  <Projects />
                  <Dashboard />
                  <Contact />
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}



export default App