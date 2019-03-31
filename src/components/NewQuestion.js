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
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
  state = {
    contentOne: '',
    contentTwo: '',
    toHome: false
  }

  handleContentOne = (e) => {
    const contentOne = e.target.value
    this.setState(() => ({
      contentOne
    }))
  }

  handleContentTwo = (e) => {
    const contentTwo = e.target.value
    this.setState(() => ({
      contentTwo
    }))
  }

  handleSubmit = () => {
    const { contentOne, contentTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({
      optionOneText: contentOne,
      optionTwoText: contentTwo
    }))

    this.setState(() => ({
      contentOne: '',
      contentTwo: '',
      toHome: true
    }))
  }

  render() {
    const { toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Container className={styles.questionWidth}>
        <p></p>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>Create New Question</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Text className="text-muted">
                    Complete the question:
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="Option one"
                    onChange={this.handleContentOne} />
                  <Form.Text size="lg">OR</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="Option one"
                    onChange={this.handleContentTwo} />
                  <Button 
                    variant="primary" 
                    className="float-right"
                    disabled={this.state.contentOne === '' || this.state.contentTwo === ''}
                    onClick={()=>this.handleSubmit()}>
                     Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ }) {
  return { 

  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))