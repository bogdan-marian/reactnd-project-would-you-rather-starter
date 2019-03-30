import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Container,
  Badge,
  Button,
  Card,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar,
  Form
} from 'react-bootstrap'
import styles from "./Question.module.css"
import OptionResult from './OptionResult'

class ViewResults extends Component {

  render() {
    const { question, authedUser } = this.props;

    const badgeOne = question.optionOne.votes.includes(authedUser)
      ? <Badge variant='secondary'>Your vote </Badge>
      : <span></span>
    const badgeTwo = question.optionTwo.votes.includes(authedUser)
      ? <Badge>Your vote </Badge>
      : <span></span>

    const votesOne = question.optionOne.votes.length
    const votesTwo = question.optionTwo.votes.length
    const all = votesOne + votesTwo

    const percentOne = Math.floor(votesOne / all * 100)
    const percentTwo = Math.floor(votesTwo / all * 100)
    const now = 60;

    return (
      <Container className={styles.questionWidth}>
        <p></p>
        <Card>
          <Card>
            <Card.Header>Asked by {question.name}</Card.Header>
            <Card.Body>
              <Row>
                <Col xs={4}>
                  <Image
                    src={question.avatar}
                    roundedCircle
                    className={styles.avatarWidth}
                  />
                </Col>
                <Col xs={8}>
                  <Card.Title>Results:</Card.Title>
                  <Row noGutters>
                    <Col xs={12}>
                      <OptionResult
                        question={question}
                        authedUser={authedUser}
                        option={question.optionOne}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col xs={12} className="justify-content-md-center"><p></p></Col>
                  </Row>
                  <Row noGutters>
                    <Col xs={12}>
                      <OptionResult
                        question={question}
                        authedUser={authedUser}
                        option={question.optionTwo}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
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