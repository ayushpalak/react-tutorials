import React, { Component,useState } from 'react';
import '../App.css'
import { Button} from 'react-bootstrap';

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
                <div className="person"> 
                    <Button className="click_button" onClick={this.click_Event_Handler}> Switch Name </Button>
                    <p> I am {this.state.person[0].name}. I like {this.state.person[0].food}. </p>
                    <p> I am {this.state.person[1].name}. I like {this.state.person[1].food}. </p>
                </div>
            );
        }else{
            return (
                <div className="person"> 
                    <Button className="click_button" onClick={this.click_Event_Handler}> Switch Name </Button>
                    <p> I am Ayush. </p>
                </div>
            );
        }
        
    }
}

const Dog = (props) => {
    
    const [currentState,updatedState] = useState({weight:'20kg'}
    
    );
    const button_click_handler = () =>{
        updatedState(
            {weight:'25kg'}
        );
    }
    
    return (
        <div>
            <button onClick={button_click_handler}> change weight </button>
            <p>
                This is a {props.value}. Weight is {currentState.weight} 
            </p> 
        </div>
    );
};

export  {Person, Dog};
