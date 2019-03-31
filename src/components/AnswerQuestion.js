import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
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
} from "react-bootstrap";
import styles from "./Question.module.css";
import {handleAnswerQuestion} from '../actions/questions'

class QuestionResults extends Component {

  updatedQuestion = undefined
  answer = undefined

  constructor(props, context) {
    super(props, context);
  }

  setOptionOne() {
    this.answer = 'optionOne'
    this.goodToGo = true
  }

  setOptionTwo() {
    this.answer = 'optionTwo'
    this.goodToGo = true
  }

  handleSubmit() {
    const{dispatch, authedUser} = this.props
    const answer = this.answer
    
    if (this.goodToGo){
      dispatch(handleAnswerQuestion({
        authedUser,
        qid: this.updatedQuestion.id,
        answer
      }))
    }
    this.props.history.push(`/question/${this.updatedQuestion.id}`)
  }

  render() {
    const { question , questions } = this.props;
    const { name, id, avatar, optionOne, optionTwo } = question;
    this.updatedQuestion = questions[id];
    
    return (
      <Container className={styles.questionWidth}>
        <p></p>
        <Card>
          <Card.Header>{name} askes:</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={4}>
                <Image
                  src={avatar}
                  roundedCircle
                  className={styles.avatarWidth}
                />
              </Col>
              <Col xs={8}>
                <Card.Title>Would You Rather ... </Card.Title>
                <Form.Check
                  type="radio"
                  label={optionOne.text}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={()=>this.setOptionOne()}
                />
                <Form.Check
                  type="radio"
                  label={optionTwo.text}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={()=>this.setOptionTwo()}
                />
                <Row>
                  <Button variant="primary" onClick={() => this.handleSubmit()}>Submit</Button>
                </Row>
                <Row>

                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
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

export default withRouter(connect(mapStateToProps)(QuestionResults));
