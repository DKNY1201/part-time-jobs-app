import React, { Component } from 'react';
import './App.css';
import JobAdd from './containers/Jobs/JobCreating';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobAdd/>
      </div>
    );
  }
}

export default App;
