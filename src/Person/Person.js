import React, { Component,useState } from 'react';
import '../App.css'
import { Button} from 'react-bootstrap';
import './Person.css'

class Person extends Component{
    
    state = {
        flag : '0',
        person : [{name:"Ayush",food:"biryani"},{name:"Karthik",food:"bread"}]
    };
    
    click_Event_Handler = () => {
        console.log('clicked');
        
        this.setState(
            {
                person : [{name:"Ayush",food:"biryani"},{name:"Faizaan",food:"mutton"}],
                //flag : '1'
            }
        );
        
    }
    
    render(props) {
        if (this.state.flag === '0'){
            return (
                <div className="Person"> 
                    <Button className="click_button" onClick={this.click_Event_Handler}> Switch Name </Button>
                    <p> I am {this.state.person[0].name}. I like {this.state.person[0].food}. </p>
                    <p> I am {this.state.person[1].name}. I like {this.state.person[1].food}. </p>
                </div>
            );
        }else{
            return (
                <div className="Person"> 
                    <Button className="click_button" onClick={this.click_Event_Handler}> Switch Name </Button>
                    <p> I am Ayush. </p>
                </div>
            );
        }
        
    }
}

const Dog = (props) => {
    
    const [currentState,updatedState] = useState({weight:'20kg',name:'default', flag:false}
    
    );
    const button_click_handler = () =>{
        updatedState(
            {weight:'25kg',name:'default', flag:false}
        );
    }

    // using style this way helps to scope the styling to component and we donot have to worry defining id for everything.
    const style = {
        "background-color": "grey",
        "border": "1px solid blue",
        'padding' : '8px',
        'font' : 'inherit',
        'cursor':'pointer'
    };
    // another way to write styles within component by using camel Casing.
    const para_style = {
        backgroundColor : 'yellow'
    };
    
    const buttonClickHandler = () => {
        var flagvalue = currentState.flag; 
        
        updatedState(
            {weight:'25kg',name:'default',flag:!flagvalue}
        );
    }
    
    return (
        <div className='Dog'>
            <button style={style} onClick={button_click_handler}> change weight </button>
            <p onClick={props.click} style={para_style}>
                This is a {props.value}. Weight is {currentState.weight}
                {currentState.name} is another dog. 
            </p> 
            <div>
            <input type="text" onChange={props.onChange}  />  {/*this is how input tag should be closed.*/}
            </div>
            <button style={style} onClick={buttonClickHandler} > toggle </button>
            { currentState.flag ?
            <div>
                <p style={para_style}> para will come and go </p>
            </div> : null
            }
        </div>
    );
};

const MagicComponent = (props) => {
    const style = {
        "width": "60%",
        "margin": "16px auto",
        "border": "1px solid #eee",
        "box-shadow": "0 2px 3px #ccc",
        "padding": "16px",
        "text-align": "center"
    };
    return (
        <div style={style}>
            <p onClick={props.click}> {props.name} will be deleted if you clicked on this. </p>
            <input type="text" onChange={props.magicOnChangeHandler} />
        </div>
    );
}

export  {Person, Dog, MagicComponent};  // this is how multiple components are exported. use default when there is only one component.
