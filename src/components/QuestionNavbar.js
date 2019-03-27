import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./Question.module.css"
import { fakeAuth } from '../utils/helpers'

class QuestionNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  render() {

    const { history } = this.props;

    const hideModal = () => {
      this.setState({ showModal: false });
    }

    const logOut = () => {
      this.setState({ showModal: false });
      fakeAuth.signout(() => history.push('/'))
    }

    const myAuthButonAction = () => {
      if (fakeAuth.isAuthenticated){
        this.setState({ showModal: true });
      }else{
        fakeAuth.signout(() => history.push('/login'))
      }
    }


    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
        <Navbar.Brand >Would you rather</Navbar.Brand>
        <Nav className="mr-auto">
          <NavItem >
            <Link to="newQuestion" className={styles.barLink}>
              New Question</Link>
          </NavItem>
          <NavItem href="#pricing" className={styles.barLink}>Leader Board</NavItem>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavItem
              onClick={myAuthButonAction}
              className={styles.barLink}>
              {fakeAuth.isAuthenticated === true
                ? this.props.authedUserObject.name
                : "Log In"}
            </NavItem>
          </Nav>
        </Navbar.Collapse>



        <Modal show={this.state.showModal} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {typeof this.props.authedUserObject === 'undefined'
                ? 'log in now'
                : this.props.authedUserObject.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to log out? </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={logOut}>
              Log out
            </Button>
          </Modal.Footer>
        </Modal>

      </Navbar>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions),
    authedUserObject: users[authedUser],
    users: users
  };
}

export default withRouter(connect(mapStateToProps)(QuestionNavbar));
