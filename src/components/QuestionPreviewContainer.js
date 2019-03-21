import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionPreviewContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        QuestionPreviewContainer
        <ul>
          {this.props.questionIds.map((id) => (
            <li><QuestionPreview/></li>
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