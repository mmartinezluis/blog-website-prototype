// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/HomePage'
import AuthorsPage from './pages/AuthorsPage'
import PostsPage from './pages/PostsPage';
import { mockAPI } from './mockApi/mockApi';
import axios from 'axios'
function App() {

  const [authors, setAuthors ] = useState();
  const [posts, setPosts ] = useState();

  useEffect(() => {
    const request = {
      method: 'get',
      headers: {
        'content-type' : 'application/json'
      }
    }
    mockAPI(request).then((response) => {
      setPosts(response.data.posts)
      setAuthors(response.data.authors)
    })
    // axios.get("database/mockDatabase.json").then((response) => {
    //   console.log(response)
    // }).catch((error) => console.log(error))
  }, [posts, authors]);
 
  return (
    <Router>
      <div className="App">
            <ul>
              <li>
                <h2><Link to="/">Home</Link></h2>
              </li>
              <li>
              <h2><Link to="/authors">Authors</Link> </h2>
              </li>
              <li>
              <h2><Link to="/posts">Posts</Link> </h2>
              </li>
              <hr />
            </ul>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/authors/*" element= {<AuthorsPage authors={authors}/>} />
                <Route path="/posts/*" element= {<PostsPage posts ={posts} />} />
            </Routes>      
      </div>
    </Router>
  );
}

export default App;
