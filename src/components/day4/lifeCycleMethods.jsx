import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 1
    };
    this.id = null;
  }

  componentDidMount() {
    // fetchmydata
    console.log("Component Did Mount");
    this.id = setInterval(() => console.log("Set Interval"), 2000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will UnMount");
    clearInterval(this.id);
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1  });
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default LifeCycleMethods;
