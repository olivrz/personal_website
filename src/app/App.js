import './App.css';

//React imports
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Import components
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import About from '../components/About';
import WebSection from '../components/WebSection';
import Footer from '../components/Footer';

function App() {
  return (
      <div>
          <Header />

      <Router>
          <NavBar />
          <main>
              <Routes>

              </Routes>
          </main>

      </Router>
          <About />
          <WebSection />
          <Footer />
      </div>
  );
}

export default App;
