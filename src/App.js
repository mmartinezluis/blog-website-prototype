// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/HomePage'
import AuthorsPage from './pages/AuthorsPage'
import PostsPage from './pages/PostsPage';
import { mockAPI } from './mockApi/mockApi';

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
  }, [posts, authors]);
 
  return (
    <Router>
      <div className="App">
            <Helmet>
                <title>App Page Meta Title</title>   
                <meta name="description" content="TExperimental App for SMO" />
            </Helmet>
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
