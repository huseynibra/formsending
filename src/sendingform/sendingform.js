
import React, { Component } from "react";

export default class SendForm extends Component {
    state = {
        name: '',
        surname: '',
        isValid: false
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

render(){
    return (
        <div>
            <h1>FORM</h1>
            <form onSubmit={this.handleSubmit}>
        <label>name:</label>
        <input name='name' type='name' required value={this.state.name} onChange={this.handleChange}  />
        <br/>
        <label>surname:</label>
        <input name='surname' type='surname' required value={this.state.surname} onChange={this.handleChange}  />
        <br/>
        <button type="submit" onChange={this.handleChange}>Submit</button>
            </form>

        </div>
    )
}
}