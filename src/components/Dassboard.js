import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionNavigation from './QuestionNavigation'
import QuestionPreview from './QuestionPreview'

class Dashboard extends Component{
  render (){
    console.log(this.props)
    {/* <div>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <div>QUESTION ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>*/}
    return (
      <div>
      <QuestionNavigation/>
    
      <li key={id}>
        <QuestionPreview id={id}/>
      </li>
      </div>
    )
  }
}

function mapsStateToProps({questions}){
  return {
    questionIds: Object.keys(questions)
  }
}

export default connect(mapsStateToProps)(Dashboard)