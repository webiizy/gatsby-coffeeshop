import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category;
  });
  return ["all", ...Array.from(new Set(tempItems))];
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    //console.log(props.items);
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }
  handleItems = i => {
    //console.log("hello form class:" + i);
    let tempItems = [...this.state.items];
    if (i === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems };
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === i);
      this.setState(() => {
        return { coffeeItems: items };
      });
    }
  };
  render() {
    console.log(this.state.coffeeItems);
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="contrainer">
            <Title>best of our menu</Title>
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize"
                      onClick={() => this.handleItems(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0">${node.price}</h6>
                      </div>
                      <p className="text-muted ">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title>Best of menu</Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1 className="">there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
