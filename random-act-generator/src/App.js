import React from 'react';
import Home from './components/Home';
import './App.css';
import TabNav from "./components/TabNav.js";
import Acts from "./components/Acts.js";
import { Route } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';

function App() {
  return (
    <div className="App">
      <TabNav />
      <AppRouter />
    </div>
  );
}

export default App;
