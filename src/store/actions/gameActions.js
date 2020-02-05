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