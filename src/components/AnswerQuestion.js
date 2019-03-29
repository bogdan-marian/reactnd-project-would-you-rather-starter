import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'
import {
  Row, Col, Image, Container, Button, Card, ButtonGroup, ToggleButton,
  ToggleButtonGroup, ButtonToolbar, Form
} from "react-bootstrap";
import styles from "./Question.module.css";

class ToggleButtonGroupControlled extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: [1, 3],
    };
  }

  handleChange(value, event) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Row><ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={1}>Option 1</ToggleButton>
          <ToggleButton value={2}>Option 2</ToggleButton>
          <ToggleButton value={3}>Option 3</ToggleButton>
        </ToggleButtonGroup>
        </Row>

      </div>

    );
  }
}

class AnswerQuestion extends Component {

  render() {
    const { question } = this.props
    const { name, id, avatar, optionOne, optionTwo } = question
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
              <Col>
              </Col>
              <Col>
                <Link to={"/question/" + id}><Button variant="outline-secondary">  View Pool</Button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row />

        <Card>
          <Card.Header>{name} askes:</Card.Header>
          <Card.Body>


            <Row>
              <Col xs={4} >
                <Image
                  src={avatar}
                  roundedCircle className={styles.avatarWidth} />
              </Col>
              <Col xs={8}><Card.Title >Would You Rather ... </Card.Title>

                <Row noGutters >{optionOne.text}</Row>


                <Row><Button variant="primary">Go somewhere</Button></Row>
              </Col>
            </Row>

            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />

          </Card.Body>
        </Card>

      </Container>
    )
  }
}

export default AnswerQuestion