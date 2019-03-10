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

        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            Text inside side card
            </Col>

          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            text inisde post item
            </Col>

        </Row>


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
