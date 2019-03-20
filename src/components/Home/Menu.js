import React, { Component } from "react";
import Title from "../Globals/Title";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    //console.log(props.items);
    this.state = {
      items: props.items.edges
    };
  }
  render() {
    return (
      <div>
        <Title>Menu</Title>
      </div>
    );
  }
}
