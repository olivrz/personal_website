import './App.css';

//React imports
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Import components
import Header from '../components/Header';

function App() {
  return (
    <Router>
      <Header>

      </Header>
      <h1>test heading</h1>
      <p>test paragraph</p>
    </Router>
  );
}

export default App;
