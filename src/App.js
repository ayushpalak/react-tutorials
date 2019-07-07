import React, { Component } from 'react';
import './App.css';
import {Person,Dog,MagicComponent} from './Person/Person.js'


class App extends Component {
  state = {name:["Golden Retriever","labrador"],magicnames:[
    { name : "albatroaz", id: 1},
    { name : "havana", id: 2},
    { name : "ramin", id: 3},
  ]};
  changeNameState = (newName) =>{
    var name = [...this.state.name]
    this.setState({
      name:[newName,...name]
    });
    
  }

  onChangeHandler = (event) => {
    this.setState({
      name:[event.target.value,...this.state.name]
    });
  }

  deleteEventHandler = (index) => {
    var newmagicnames =  [...this.state.magicnames];
    newmagicnames.splice(index,1);
    this.setState({magicnames:newmagicnames});
  }

  magicOnChangeHandler = (event,index) => {
    var _magicnames = [...this.state.magicnames]
    //_magicnames.findIndex
    this.setState({magicnames:newmagicnames}); 
  }

  // labrador, great dane
  
  render() {
    return (
      <div>
        <Person name="ayush" food="biryani"> this is a Person tag. </Person>
        {/* passing function as a reference using bind */}
        <Dog value={this.state.name[0]} click={this.changeNameState.bind(this,'pug')}></Dog> 
         {/* anonymous function is returning this.changeNameState('labrador') */}
         {/* passing function as a reference using reference to function */}
         {/* not very effiient */}
        <Dog value='great dane' click={ () => this.changeNameState('labrador') }></Dog>
        <Dog value={this.state.name[1]} onChange={(event) => this.onChangeHandler(event)} ></Dog>  
        {/* note that we are using arrow function to pass index instead of normal passing. we cannot simply invoke function during rendering */}
        {/* To prevent react from rendering all the elements we provide a key to track and update only that element. */}
        {  
          this.state.magicnames.map((name,index) => {
              return (<MagicComponent magicOnChangeHandler = {(event) => this.magicOnChangeHandler(event,index)} click={() => this.deleteEventHandler(index)} name={name.name} key={name.id}/>);
          })
        }
      </div>
    );
  }
}



export default App;
