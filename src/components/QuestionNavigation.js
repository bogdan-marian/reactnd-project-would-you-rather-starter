import React, { Component } from 'react'
import {  Nav } from 'react-bootstrap'

class QuestionNavigation extends Component {
  render() {
    return (
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link >Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

export default QuestionNavigation
