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
           <Helmet>
                <title>Title from App Component</title>   
                <meta name="description" content="Description from inside the App component" />
          </Helmet>
          <h1>HELLO</h1>
          <p>{count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
