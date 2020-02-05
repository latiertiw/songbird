import actionTypes from "../actionTypes"
import stages from "../../data/stages";
import actions from "../actions";

const initialState = {
    score: 0,
    stage: 0,
    isStageCompleted: false,
    selectedBird: {
       selected: false
    }
};


const gameReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.STAGE_COMPLETE :
            return { 
                ...state,
                isStageCompleted: true,
                score: state.score + action.stage_score
            }
        case actionTypes.STAGE_NEXT:
            return {
                ...state,
                isStageCompleted: false,
                stage: state.stage + 1,
                selectedBird : {
                    selected: false
                }
            }
        case actionTypes.SELECT:
            return {
                ...state,
                selectedBird: action.selectedBird
            }
        default: return {...state}
    }
}

export default gameReducer