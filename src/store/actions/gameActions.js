import actionTypes from "../actionTypes"

export const complete = (score) => {
    return dispatch => {
       return new Promise((resolve,reject)=>{
           dispatch({
               type: actionTypes.STAGE_COMPLETE,
               stage_score: score
           })
           resolve();
       })
    }
}

export const next = () => {
    return dispatch => {
       return new Promise((resolve,reject)=>{
           dispatch({
               type: actionTypes.STAGE_NEXT,
           })
           resolve();
       })
    }
}

export const select = (bird) => {
    return dispatch => {
       return new Promise((resolve,reject)=>{
           dispatch({
               type: actionTypes.SELECT,
               selectedBird: bird
           })
           resolve();
       })
    }
}

export const selectAnswerBird = (bird) => {
    return dispatch => {
       return new Promise((resolve,reject)=>{
           dispatch({
               type: actionTypes.SELECT_ANSWER_BIRD,
               selectedBird: bird
           })
           resolve();
       })
    }
}

export const wrong = () => {
    return dispatch => {
        return new Promise((resolve,reject)=>{
            dispatch({
                type: actionTypes.STAGE_WRONG_ANSWER,
            })
            resolve();
        })
    }
}

export const stages = (count) => {
    return dispatch => {
        return new Promise((resolve,reject)=>{
            dispatch({
                type: actionTypes.SET_STAGES_COUNT,
                count
            })
            resolve();
        })
    }
}

export const newgame = () => {
    return dispatch => {
        return new Promise((resolve,reject)=>{
            dispatch({
                type: actionTypes.NEW_GAME,
            })
            resolve();
        })
    }
}

export const completed = () => {
    return dispatch => {
        return new Promise((resolve,reject)=>{
            dispatch({
                type: actionTypes.GAME_COMPLETED,
            })
            resolve();
        })
    }
}

