import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import QuestionNavigation from './QuestionNavigation'


class QuestionPreviewContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <QuestionNavigation />
        {this.props.questionIds.map(id => (
          <QuestionPreview key={id} id={id}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
