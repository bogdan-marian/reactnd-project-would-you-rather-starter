import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styles from "./Question.module.css";


class Questioncontainer extends Component {
  constructor(props) {
    super(props)
    this.inverseByTime = this.inverseByTime.bind(this);
  }

  inverseByTime(a, b) {
    let timeA = this.props.questions[a].timestamp
    let timeB = this.props.questions[b].timestamp
    if (timeA > timeB)
      return -1;
    if (timeA < timeB)
      return 1;
    return 0;
  }

  render() {

    let questions = this.props.questions
    let authedUser = this.props.authedUser

    let unanswerdQuestions = []
    let answerdQuestions = []
    Object.keys(questions).forEach(key => {
      const rawQuestion = questions[key]
      const allVotes = rawQuestion.optionOne.votes.concat(rawQuestion.optionTwo.votes)


      if (allVotes.includes(authedUser)) {
        answerdQuestions.push(rawQuestion.id)
      } else {
        unanswerdQuestions.push(rawQuestion.id)
      }
    })

    unanswerdQuestions.sort(this.inverseByTime)
    answerdQuestions.sort(this.inverseByTime)

    return (
      <Container className={styles.questionWidth}>
        <p></p>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Unanswerd" id="uncontrolled-tab-example">
              <Tab eventKey="Unanswerd" title="Unanswerd Questions">
                {unanswerdQuestions.map(qid => (
                  <QuestionPreview key={qid} id={qid} />
                ))}
              </Tab>
              <Tab eventKey="Answerd" title="Answerd Questions">
                {answerdQuestions.map(qid => (
                  <QuestionPreview key={qid} id={qid} />
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

export default connect(mapStateToProps)(Questioncontainer);
