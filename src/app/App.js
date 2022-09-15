import './App.css';

//React imports
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Import components
import Header from '../components/Header';

function App() {
  return (
      <Router>
          <Header />
          <main>
              <Routes>

              </Routes>
          </main>

    </Router>
  );
}

export default App;
