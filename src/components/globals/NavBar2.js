import React, { Component } from "react"
import logo from "../../images/logo.svg"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { FaBeer } from "react-icons/fa"

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      links: [
        {
          id: 1,
          path: "/",
          text: "home",
        },
        {
          id: 2,
          path: "/about",
          text: "about",
        },
      ],
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <span className="logo-lg">
              <img src={logo} width="40px" />
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.links.map(item => {
                return (
                  <NavItem key={item.id}>
                    <NavLink href={item.path}>{item.text}</NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
