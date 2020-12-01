import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Redirect,
} from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { fakeAuth } from "../utils/helpers";

class Login extends Component {
  state = {
    redirectToRefferrer: false
  };
  login = (key) => {
    this.props.dispatch(setAuthedUser(key))
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToRefferrer: true
      }));
    });
  };

  render() {
    const { users, from } = this.props;
    const { redirectToRefferrer } = this.state;

    var listUsers = Object.keys(users).map(key => (

      <Dropdown.Item key={key} onClick={() => this.login(key)}>{users[key].name}</Dropdown.Item>

    ));


    if (redirectToRefferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">You must log in to view this page. Who wyould you like to impersonate?</Row>
        <Row className="justify-content-md-center">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {listUsers}</DropdownButton>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ users }, ownPromps) {
  return {
    users: users,
    from: ownPromps.location.state || { pathname: "/" }
  };
}

export default connect(mapStateToProps)(Login); 
