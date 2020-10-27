import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Hello from './components/Hello'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
function App() {
  return (
    <div className="App">
    <FunctionClick></FunctionClick>
    {/* <Counter></Counter> */}
    {/* <Message  /> */}
       {/* <Greet name= "Bruce" heroName="batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name= "Clark" heroName="Superman" >
        <button>Action</button>
      </Greet>
      <Greet name= "Diana" heroName="Wonder Woman"></Greet>
        <Welcome name ="bruce" heroName="batman"></Welcome> */}
      {/* <Hello></Hello>  */}
    </div>
  );
}

export default App;
