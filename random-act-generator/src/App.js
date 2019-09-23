import React from 'react';
import Home from './components/Home';
import './App.css';
import TabNav from "./components/TabNav.js";
import Acts from "./components/Acts.js";
import { Route } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import ContactList from './components/ContactList';
// import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <TabNav />
      <AppRouter />
      <ContactList />
    </div>
  );
}

export default App;
