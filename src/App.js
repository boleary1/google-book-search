import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Books from './Books';
import Saved from './Saved';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router><div className="app">
        <Header />
        <Route exact path = "/" component= {Books} />
        <Route exact path = "/saved" component= {Saved} />

      </div>
      </Router>
    )
  }
}
export default App;
