import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person className="Person" name="ayush" food="biryani"> this is inside Person tag. </Person>
      </div>
    );
  }
}

export default App;
