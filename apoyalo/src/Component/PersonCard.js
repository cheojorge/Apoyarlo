import React, { Component } from 'react';

class PersonalCards extends Component{
    constructor(props){
        super(props);
        this.state = {pos : this.props.age};
    }
    agePlus1 = () => {
        this.setState({ pos: this.state.pos +1});
    }
    render(){
        return(
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.pos}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <button onClick={ this.agePlus1}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </>
        )
    }
}
export default PersonalCards;