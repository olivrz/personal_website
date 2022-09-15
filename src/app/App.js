import './App.css';

//React imports
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Import components
import NavBar from '../components/NavBar';
import SiteSection from '../components/SiteSection';
import Header from '../components/Header';

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
        <SiteSection name='about-me'/>
      </div>
  );
}

export default App;
