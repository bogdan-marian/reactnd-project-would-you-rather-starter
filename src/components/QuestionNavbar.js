import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionNavbar extends Component {
  render() {
    console.log(this.props)
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
        <Navbar.Brand >Would you rather</Navbar.Brand>
        <Nav className="mr-auto">
          
            <Nav.Link >
              New Question
          </Nav.Link>
          <Nav.Link href="#pricing">Leader Board</Nav.Link>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link >login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default QuestionNavbar