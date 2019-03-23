import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import QuestionPreviewContainer from "./QuestionPreviewContainer";
import QuestionNavbar from "./QuestionNavbar";
import LoadingBar from 'react-redux-loading'
import QuestionPage from './QuestionPage'
import Lader from './Lader'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <QuestionNavbar />
          <QuestionNavigation />

          <div>
            <LoadingBar />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={QuestionPreviewContainer} />
                <Route path='/question/:id' exact component={QuestionPage} />
                <Route path='/lader' exact component={Lader} />
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
