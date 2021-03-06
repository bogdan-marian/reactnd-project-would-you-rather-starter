import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'johndoe'

export function handleInitialData(){
    return (dispatch) =>{
        dispatch(showLoading())
        return getInitialData()
            .then(({users, quetions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(quetions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}