import React, { Component } from 'react';

class Person extends Component{
    render(props) {
        return (
            <div> 
                <p> I am {this.props.name}. I like {this.props.food}. </p>
                <p> {this.props.children}</p>
            </div>
        );
    }
}

export default Person;
