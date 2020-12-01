import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "react-bootstrap";
import Questioncontainer from "./QuestionContainer";
import QuestionPage from './QuestionPage'
import QuestionNavbar from "./QuestionNavbar";
import LoadingBar from "react-redux-loading";
import Lader from "./Lader";
import NewQuestion from "./NewQuestion";
import NoMatch from './NoMatch'
import { fakeAuth } from "../utils/helpers";
import Login from "./Login"


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
                <Switch>
                  <PrivateRoute
                    path="/"
                    exact
                    component={Questioncontainer}
                  />
                  <Route
                    path="/login"
                    component={props => (
                      <Login {...props} />
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
                  <PrivateRoute
                    component={NoMatch}
                  />
                </Switch>
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
