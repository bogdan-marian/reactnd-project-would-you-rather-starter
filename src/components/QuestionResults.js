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