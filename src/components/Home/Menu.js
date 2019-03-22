import React, { Component } from "react";
import Title from "../Globals/Title";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    console.log(props.items);
    this.state = {
      items: props.items.edges
    };
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <div>
          <Title>our Menu</Title>
        </div>
      );
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title>Best of menu</Title>
            <div />
          </div>
        </section>
      );
    }
  }
}
