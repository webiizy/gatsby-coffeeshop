import React, { Component } from "react"
import logo from "../../images/logo.svg"
import { Link } from "gatsby"

export default class NavBar extends Component {
  state = {
    isOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        link: "/",
        text: "home",
      },
      {
        id: 2,
        link: "/products",
        text: "products",
      },
      {
        id: 3,
        link: "/about",
        text: "about",
      },
    ],
  }
  clickhander = () => {
    //console.log("hi")
    this.state.isOpen
      ? this.setState({ isOpen: false, css: "collapse navbar-collapse" })
      : this.setState({ isOpen: true, css: "collapse navbar-collapse show" })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Coffee Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.clickhander}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mr-auto">
            {this.state.links.map(item => {
              return (
                <li key={item.id} className="navbar-item">
                  <Link to={item.link} className="nav-link">
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
