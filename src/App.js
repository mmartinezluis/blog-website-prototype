// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Authors from './pages/Authors'

function App() {

  return (
    <Router>
      <div className="App">
            <Helmet>
                <title>Social Media Optimization</title>   
                <meta name="description" content="TExperimental App for SMO" />
            </Helmet>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
            </ul>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/authors/*" element= {<Authors />} />
                {/* <Route path="/posts" element= {<Post />} /> */}
            </Routes>      
      </div>
    </Router>
  );
}

export default App;
