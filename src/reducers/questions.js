import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION:

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne: {
            ...state[action.qid].optionOne,
            votes: action.answer === 'optionOne'
              ? state[action.qid].optionOne.votes.concat([action.authedUser])
              : state[action.qid].optionOne.votes.filter((uid) => uid !== action.authedUser)
          },
          optionTwo:{
            ...state[action.qid].optionTwo,
            votes: action.answer === 'optionTwo'
              ? state[action.qid].optionTwo.votes.concat([action.authedUser])
              : state[action.qid].optionTwo.votes.filter((uid) => uid !== action.authedUser)
          }
        }
      }
    default:
      return state
  }
}