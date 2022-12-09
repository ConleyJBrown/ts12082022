import React from 'react';
import './App.css';
import backgrounddark from './images/backgrounddark.jpg'

function App() {
  return (
    <div style = {{ backgroundImage: `url(${backgrounddark})`,width: '100vw', height: '100vh',}}>
      <div className= "w-screen">
      <h1 className = "text-3xl font-bold underline text-center text-white">
        Welcome
      </h1>
      </div>
      <div className = "w-screen">
      <p className ="text-white text-center">
        Connect your wallet to get started!
      </p>
      </div>
      <div className = "w-screen text-center">
        <button className = "text-white ">Connect Wallet</button>
      </div>
    </div>
  );
}

export default App;
