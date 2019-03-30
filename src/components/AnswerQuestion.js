import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Redirect } from "react-router-dom";
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

class AnswerQuestion extends Component {

  updatedQuestion = undefined
  answer = undefined
  goodToGo = false
  authedUser

  constructor(props, context) {
    super(props, context);
  }

  setOptionOne() {
    console.log("setOptionOne ")
    console.log(this.updatedQuestion)
    
    this.answer = 'optionOne'
    console.log(this.answer)
    this.goodToGo = true
  }

  handleSubmit() {
    const{dispatch, authedUser} = this.props
   
    const updatedQuestion = this.updatedQuestion
    const answer = this.answer
    
    if (this.goodToGo){

      console.log("good to go: " + this.goodToGo)
      dispatch(handleAnswerQuestion({
        authedUser,
        qid: updatedQuestion.id,
        answer
      }))
    }
    console.log("handleSubmit")
  }

  render() {
    const { question , questions } = this.props;
    const { name, id, avatar, optionOne, optionTwo } = question;
    this.updatedQuestion = questions[id];
    
    return (
      <Container className={styles.questionWidth}>
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

                <Row noGutters>{optionOne.text}</Row>

                <Form.Check
                  type="radio"
                  label={question.optionOne.text}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={()=>this.setOptionOne()}
                />
                <Form.Check
                  type="radio"
                  label={question.optionTwo.text}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
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

export default connect(mapStateToProps)(AnswerQuestion);
