import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import QuestionPreviewContainer from "./QuestionPreviewContainer";
import QuestionNavbar from "./QuestionNavbar";
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Container>
        <QuestionNavbar />
        <QuestionNavigation />
        
        <div>
          <LoadingBar />
          {this.props.loading === true ? null : <QuestionPreviewContainer />}
        </div>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
