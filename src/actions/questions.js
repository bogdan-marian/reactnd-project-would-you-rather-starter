import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }


}

export function handleAnswerQuestion(info) {
    return (dispatch, getState) => {
        dispatch(answerQuestion(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handleAnswerQuestion: ', e)
                dispatch(answerQuestion(info))
                alert('There was an error answering the question. Try again.')
            })
    }
}