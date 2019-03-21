import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card} from 'react-bootstrap'

class QuestionPreview {
  render() {
    return (
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(QuestionPreview)