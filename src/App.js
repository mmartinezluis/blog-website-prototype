// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
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
    }
    mockAPI(request).then((response) => {
      console.log(response)
      setPosts(response.data.posts)
      setAuthors(response.data.authors)
    })
  },[]);
 
  return (
    <Router>
      <div className="App">
            <nav style={{ margin: 20 }}>
                <Link to="/" style={{ padding: 20 }}>
                  Home
                </Link>
                <Link to="/posts" style={{ padding: 20 }}>
                  Posts
                </Link> 
                <Link to="/authors" style={{ padding: 20 }}>
                  Authors
                </Link> 
            </nav>
             <hr />
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
