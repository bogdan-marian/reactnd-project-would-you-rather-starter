import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./Question.module.css"
import { fakeAuth } from '../utils/helpers'
//import MyAuthButton from './MyAuthButton'




const AuthButton = withRouter(({ history, authedUserObject }) => (
  fakeAuth.isAuthenticated === true
    ? <Nav.Link
      onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>    welcome! {authedUserObject.name} <button >Sign Out</button>
    </Nav.Link>
    : <Nav.Link className={styles.barLink}>You are not logged in.</Nav.Link>
))

class QuestionNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  render() {

    const { history } = this.props;

    const logOutCloseModal = () => {
      const that = this;
      that.setState({ showModal: false });
    }

    const openModal = () => {
      this.setState({ showModal: true });
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
            {/* 
            <Nav.Link >
              {typeof this.props.authedUserObject === 'undefined'
                ? 'log in now'
                : this.props.authedUserObject.name}
            </Nav.Link>
            */ }


            <NavItem
              onClick={myAuthButonAction}
              className={styles.barLink}>
              {fakeAuth.isAuthenticated === true
                ? this.props.authedUserObject.name
                : "Log In"}
            </NavItem>
          </Nav>
        </Navbar.Collapse>



        <Modal show={this.state.showModal} onHide={logOutCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {typeof this.props.authedUserObject === 'undefined'
                ? 'log in now'
                : this.props.authedUserObject.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to log out? </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={logOutCloseModal}>
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
