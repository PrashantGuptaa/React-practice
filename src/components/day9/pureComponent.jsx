import React, { PureComponent, Component } from "react";

class ComponentPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prashant",
      arr:[10]
    };
  }

  handleUpdate = () => {
    const number = Math.round(Math.random() * 10);
    // this.setState({ name: this.state.name });
    const { arr } = this.state;
    const arrCopy = [ ...arr ];
    arrCopy.push(number)

    this.setState({ arr: arrCopy });
    // console.log("State Arr",arr);
  };

  render() {
    console.log("Component Updated");
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        {
            this.state.arr.map((val, i) => <h3 key={i}>{val}</h3>)
        }
        <button onClick={this.handleUpdate}>Click</button>
      </div>
    );
  }
}

export default ComponentPure;
