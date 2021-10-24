// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Helmet } from "react-helmet";


function App() {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
           <Helmet>
                <title>DevBlog</title>
                <meta charset="utf-8" />
                <meta property="og:title" content="Updated!!" />
                <meta name="description" content="Blog website for coding related posts" />
                <meta name="image" content="https://user-images.githubusercontent.com/75151961/138567246-01b18138-9eb4-4d64-973b-7965083a26a8.png" />
          </Helmet>
          <h1>HELLO</h1>
          <p>{count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
