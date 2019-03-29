import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styles from "./Question.module.css";
import formatQuestion from '../utils/helpers'


class Questioncontainer extends Component {
  render() {

    let questions = this.props.questions
    let authedUser = this.props.authedUser

    let unanswerdQuestions = []
    let answerdQuestions = []
    Object.keys(questions).filter(key => {
      const rawQuestion = questions[key]
      const allVotes = rawQuestion.optionOne.votes.concat(rawQuestion.optionTwo.votes)


      if (allVotes.includes(authedUser)) {
        answerdQuestions.push(rawQuestion.id)
      } else {
        unanswerdQuestions.push(rawQuestion.id)
      }
    })

    return (
      <Container className={styles.questionWidth}>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Unanswerd" id="uncontrolled-tab-example">
              <Tab eventKey="Unanswerd" title="Unanswerd Questions">
                {unanswerdQuestions.map(qId => (
                  <QuestionPreview key={qId} id={qId} />
                ))}
              </Tab>
              <Tab eventKey="Answerd" title="Answerd Questions">
                {answerdQuestions.map(qId => (
                  <QuestionPreview key={qId} id={qId} />
                ))}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionIds: Object.keys(questions),
    questions: questions,
    users: users,
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(Questioncontainer
);
