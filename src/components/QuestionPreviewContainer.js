import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreviewContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        QuestionPreviewContainer
        <ul>
          {this.props.questionIds.map((id) => (
            <li>question id: {id}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(QuestionPreviewContainer)