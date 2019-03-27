import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import QuestionPreviewContainer from "./QuestionPreviewContainer";
import QuestionNavbar from "./QuestionNavbar";
import LoadingBar from 'react-redux-loading'
import QuestionPage from './QuestionPage'
import Lader from './Lader'
import NewQuestion from './NewQuestion'
import { fakeAuth } from '../utils/helpers'
import Login from './Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

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
            {this.props.loading === true
              ? null
              : <div>
                <PrivateRoute path='/' exact component={QuestionPreviewContainer} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/question/:id' exact component={QuestionPage} />
                <PrivateRoute path='/lader' exact component={Lader} />
                <PrivateRoute path='/newQuestion' exact component={NewQuestion}/>
              </div>}
          </div>
        </Container>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
