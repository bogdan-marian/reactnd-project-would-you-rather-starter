import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dassboard'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (


      <Container >
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
        
        <div>
          {this.props.loading === true
            ? null
            : <Dashboard />
          }
        </div>
      </Container>

    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
