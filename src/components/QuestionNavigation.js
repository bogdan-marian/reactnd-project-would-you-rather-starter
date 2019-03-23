import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

class QuestionNavigation extends Component {
  render() {
    return (
      <div>
        <br></br>
        <ButtonToolbar className="justify-content-md-center">
          <Button variant="outline-secondary">Unanswerd Questions</Button>
          <Button variant="outline-secondary">Answered Questions</Button>
        </ButtonToolbar>
        <br></br>
      </div>
    )
  }
}

export default QuestionNavigation
