import React, { Component } from 'react';
import './App.css';
import {Person,Dog} from './Person/Person.js'


class App extends Component {
  state = {name:"Golden Retriever"};
  changeNameState = (newName) =>{
    this.setState({
      name:newName
    });
    
  }

  onChangeHandler = (event) => {
    this.setState({
      name:event.target.value
    });
  }

  // labrador, great dane
  
  render() {
    return (
      <div>
        <Person name="ayush" food="biryani"> this is a Person tag. </Person>
        {/* passing function as a reference using bind */}
        <Dog value={this.state.name} click={this.changeNameState.bind(this,'pug')}></Dog> 
         {/* anonymous function is returning this.changeNameState('labrador') */}
         {/* passing function as a reference using reference to function */}
         {/* not very effiient */}
        <Dog value='great dane' click={ () => this.changeNameState('labrador') }></Dog>
        <Dog value={this.state.name} onChange={this.onChangeHandler} ></Dog>
        
      </div>
    );
  }
}

export default App;
