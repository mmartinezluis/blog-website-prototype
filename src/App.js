// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div className="App">
            <Helmet>
                  <title>Social Media Optimization</title>   
                  <meta name="description" content="TExperimental App for SMO" />
            </Helmet>
            <Routes>
              <Route path="/" element= {<Home />} />
            </Routes>      
      </div>
    </Router>
  );
}

export default App;
