import React, {Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import AnswerQuestion from './AnswerQuestion';

class QuestionPage extends Component{
  render(){
    let authedUser = this.props.users[this.props.authedUser]
    let userKey = this.props.authedUser
    
    let id = this.props.match.params.id
    let rawQuestion = this.props.questions[id]
    let author = this.props.users[rawQuestion.author]
    let question = formatQuestion(rawQuestion, author)
    
    if (question.allVotes.includes(userKey)){
      return (
        <p>{userKey} have answerd this question</p>
      )
    }else{
      return (
        <AnswerQuestion question={question}/>
      )
    }

    console.log( question)
    return (
      <div>react-question-page</div>
    )
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