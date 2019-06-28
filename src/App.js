import React, { Component } from 'react';
import './App.css';
import {Person,Dog} from './Person/Person.js'


class App extends Component {
  render() {
    return (
      <div>
        <Person name="ayush" food="biryani"> this is a Person tag. </Person>
        <Dog value='German Shepherd'></Dog>
      </div>
    );
  }
}

export default App;
