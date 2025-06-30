import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(){
        super();
        this.state = {count:0};
        console.log('Constructor: Component is Updated');
    }
    componentDidMount(){
        console.log('ComponentDidMount: Component is added to DOM');
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate: Component is Updated');
    }
    componentWillUnmount(){
        console.log('ComponentwillUnmount: Component will removed');
    }
    HandileClicking = () =>{
        this.setState({count : this.state.count+1});
    }
  render() {
    console.log('Render : JSX is rendering ');
    return (
      <div>
        <h2>Class Component life cycle</h2>
        <h3>Class count: {this.state.count}</h3>
        <button onClick={this.HandileClicking}>Click Me</button>
      </div>
    )
  }
}
