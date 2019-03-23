import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";


class QuestionPreviewContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        QuestionPreviewContainer
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
