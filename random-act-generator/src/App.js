import React from 'react';
import Home from './components/Home';
import './App.css';
import TabNav from "./components/TabNav.js";

function App() {
  return (
    <div className="App">
      <TabNav />
      <Home />
    </div>
  );
}

export default App;
