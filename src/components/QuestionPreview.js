import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import styles from "./Question.module.css";
import {formatQuestion} from '../utils/helper'
var placeholder = require("../images/paceholder.svg");

class QuestionPreview extends Component {
  render() {
    return (
      <Container className={styles.questionWidth}>
        <Row>Name Sirname askes:</Row>
        <Row className="justify-content-md-center">
          <Col >
            <Image src={placeholder} roundedCircle className={styles.avatarWidth}/>
          </Col>
          <Col>the content of the big column</Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}){
  const question = questions[id]
  return{
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  }
}

export default QuestionPreview;
