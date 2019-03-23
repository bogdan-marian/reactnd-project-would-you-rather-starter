import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import styles from "./Question.module.css";
import { formatQuestion } from '../utils/helpers'
var placeholder = require("../images/paceholder.svg");

class QuestionPreview extends Component {
  render() {
    const { question } = this.props
    if (question === null) {
      return <p> This question doesn't exist</p>
    }
    const { name, id, avatar, optionOne, optionTwo } = question

    console.log('avatar' + avatar)
    return (

      <Container className={styles.questionWidth}>
        <Row />
        <Row className={styles.nameStile}>{name} askes:</Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Image
              src={avatar}
              roundedCircle className={styles.avatarWidth} />
          </Col>
          <Col >
            <div className={styles.rotherStile}>Whould you rather</div>
            <Row noGutters >{optionOne.text}</Row>
            <Row noGutters className="justify-content-md-center">
              <Col xs lg="1">or</Col>
            </Row>
            <Row noGutters >{optionTwo.text}</Row>
            <Row className="justify-content-md-center">
              <Col></Col>
              <Col>
                <Button variant="outline-secondary">View Pool</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row />
      </Container>

    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  }
}

export default connect(mapStateToProps)(QuestionPreview)
