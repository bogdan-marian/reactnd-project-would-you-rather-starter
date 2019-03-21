import React, {Component} from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

class QuestionNavbar extends Component{
  render (){
    console.log(this.props)
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
          <Navbar.Brand href="/">Would-You-Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/login">login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
export default QuestionNavbar