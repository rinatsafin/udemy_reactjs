import React, { Component } from "react";

export default class LifeCycles extends Component {
  // 1 get default props

  // 2 set default state
  state = { title: "life cycles" };

  // 3 before render jsx
  UNSAFE_componentWillMount() {
    console.log("before render\n");
  }

  // 5 after render jsx
  componentDidMount() {
    console.log("after render\n");
    document.querySelector("h3").style.color = "red";
  }

  UNSAFE_componentWillUpdate() {
    console.log("BEFORE UPDATE\n");
  }

  componentDidUpdate() {
    console.log("AFTER UPDATE\n");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (nextState.title === "somthing else") return false;
    else return true;
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  // 4 render
  render() {
    console.log("RENDER\n");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div
          onClick={() =>
            this.setState({
              title: "somthing else"
            })
          }
        >
          CLICK TO CHANGE
        </div>
      </div>
    );
  }
}
