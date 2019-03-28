import React, { Component } from "react";
import QuestionPreview from "./QuestionPreview";
import QuestionNavigation from './QuestionNavigation';
export class QuestionPreviewContainer extends Component {
  render() {
    console.log(this.props);
    return (<div>
      <QuestionNavigation />
      {this.props.questionIds.map(id => (<QuestionPreview key={id} id={id} />))}
    </div>);
  }
}
