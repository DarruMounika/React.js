import React, { Component } from 'react'

export default class FunctionBinding extends Component {
    constructor(){
        super();
        // this.state = {message:'Hello'};
        this.state = {
            message : "Good Morning",
            clicked : false
        };
    }
    // HandleClick = ()=>{
    //     console.log(this.state.message);
    // }
    HandleClick = () => {
        this.setState({clicked:true});
    }
  render() {
    return (
      <div>
        <h2>Function Binding</h2>
        <button onClick={this.HandleClick}>Click me</button>
        {this.state.clicked && <p>{this.state.message}</p>}
      </div>
    )
  }
}
