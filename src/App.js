import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const getHats = (props) => {
  return (
    <>
      <h2>Hats</h2>
    </>
  )
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={getHats} />
      </Switch>

    </>

  )
}

export default App;
