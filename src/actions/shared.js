import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {receiveUsers, setAuthedUser} from '../actions/authedUsers'

const AUTHED_ID = 'johndoe'

export function handleInitialData(){
    return (dispatch) =>{
        return getInitialData()
            .then(({users, quetions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(quetions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}