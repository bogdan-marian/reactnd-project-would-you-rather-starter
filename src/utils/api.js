import{
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, quetions])=>({
        users,
        quetions
    }))
}

export function saveQuestion(info){
    console.log('saveQuestion')
    console.log(info)
    return _saveQuestion(info)
}

export function saveQuestionAnswer(info){
    return _saveQuestionAnswer(info)
}