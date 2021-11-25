// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Authors from './pages/Authors'
import axios from 'axios'

function App() {

  const [authors, setAuthors ] = useState([]);

  useEffect(() => {
    console.log("useffect was called")
    getAuthors()
  }, []);

  const getAuthors = () => {  
    axios.get("/users")
      .then( (response) => {
        setAuthors(response.data);
      })
      .catch( (error)=> {
          console.log(error)
      })
  }

  return (
    <Router>
      <div className="App">
            <Helmet>
                <title>App Page Meta Title</title>   
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
                <Route path="/authors/*" element= {<Authors authors={authors}/>} />
                {/* <Route path="/posts" element= {<Post />} /> */}
            </Routes>      
      </div>
    </Router>
  );
}

export default App;
