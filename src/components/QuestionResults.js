import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Container,
  Button,
  Card,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar,
  Form
} from 'react-bootstrap'
import styles from "./Question.module.css";

class ViewResults extends Component {
  render() {
    return (
      <Container className={styles.questionWidth}>
        <Card>
          Question results
      </Card>
      </Container>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions),
    authedUserObject: users[authedUser],
    users: users,
    authedUser: authedUser,
    questions: questions
  };
}

export default withRouter(connect(mapStateToProps)(ViewResults))