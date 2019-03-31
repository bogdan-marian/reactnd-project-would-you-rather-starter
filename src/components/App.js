import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, 
  Route, 
  Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import {setAuthedUser} from "../actions/authedUser";
import { Container,Dropdown, DropdownButton, Row } from "react-bootstrap";
import Questioncontainer from "./QuestionContainer";
import QuestionPage from './QuestionPage'
import QuestionNavbar from "./QuestionNavbar";
import LoadingBar from "react-redux-loading";
import Lader from "./Lader";
import NewQuestion from "./NewQuestion";
import { fakeAuth } from "../utils/helpers";

class Login extends React.Component {
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
    const { users } = this.props;
    var listUsers = Object.keys(users).map(key => (
      
        <Dropdown.Item key={key} onClick={() => this.login(key)}>{users[key].name}</Dropdown.Item>
       
    ));

    const { redirectToRefferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {


  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <QuestionNavbar />

          <div>
            <LoadingBar />
            {this.props.loading === true ? null : (
              <div>
                <PrivateRoute
                  path="/"
                  exact
                  component={Questioncontainer}
                />
                <Route
                  path="/login"
                  component={props => (
                    <Login {...props}
                      users={this.props.users}
                      dispatch={this.props.dispatch} />
                  )}
                />
                <PrivateRoute
                  path="/question/:id"
                  exact
                  component={QuestionPage}
                />
                <PrivateRoute path="/lader" exact component={Lader} />
                <PrivateRoute
                  path="/newQuestion"
                  exact
                  component={NewQuestion}
                />
              </div>
            )}
          </div>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users: users
  };
}

export default connect(mapStateToProps)(App);
