import React, {Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import AnswerQuestion from './AnswerQuestion';
import QuestionResults from './QuestionResults'
import NoMatch from './NoMatch';

class QuestionPage extends Component{
  render(){
    let authedUser = this.props.users[this.props.authedUser]
    let userKey = this.props.authedUser
    
    let id = this.props.match.params.id
    let rawQuestion = this.props.questions[id]
    console.log("my question id")
    console.log(rawQuestion)
    if (typeof  rawQuestion === "undefined"){
      return (
        <NoMatch />
      )
    }
    let author = this.props.users[rawQuestion.author]
    let question = formatQuestion(rawQuestion, author)
    
    if (question.allVotes.includes(userKey)){
      return (
        <QuestionResults question={question}/>
      )
    }else{
      return (
        <AnswerQuestion question={question}/>
      )
    }
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps) (QuestionPage)