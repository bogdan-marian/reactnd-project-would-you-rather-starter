import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import QuestionPreviewContainer from "./QuestionPreviewContainer";
import QuestionNavbar from "./QuestionNavbar";
import "holderjs";

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
