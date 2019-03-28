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
    let users = this.props.users
    
    let unanswerdQuestions = []
    let answerdQuestions = []
    const myNewQuestions = Object.keys(questions).filter(key => {
      const rawQuestion = questions[key]
      const author = users[rawQuestion.author]
      console.log(rawQuestion)
      const allVotes = rawQuestion.optionOne.votes.concat(rawQuestion.optionTwo.votes)
      console.log(allVotes)
      console.log("authed user: " + authedUser)

      if (allVotes.includes(authedUser)) {
        answerdQuestions.push(rawQuestion.id)
        console.log('wee have a winner ')
      } else {
        unanswerdQuestions.push(rawQuestion.id)
      }

    })
    console.log("Answerd: " + answerdQuestions)
    console.log("Unanswerd: " + unanswerdQuestions)

    return (
      <Container className={styles.questionWidth}>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Unanswerd" id="uncontrolled-tab-example">
              <Tab eventKey="Unanswerd" title="Unanswerd Questions">
                {answerdQuestions.map(qId => (
                  <QuestionPreview key={qId} id={qId} />
                ))}
              </Tab>
              <Tab eventKey="Answerd" title="Answerd Questions">
                Some other text
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
