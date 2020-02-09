import actionTypes from "../actionTypes"
import stages from "../../data/stages";
import actions from "../actions";

const initialState = {
    score: 0,
    stage: 0,
    stagesCount: undefined,
    isStageCompleted: false,
    isGameCompleted: false,
    selectedBird: {
       selected: false
    },
    answerBird: {
        selected: false
     },
    wrongAnswers: 0
};


const gameReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.STAGE_COMPLETE :
            return { 
                ...state,
                isStageCompleted: true,
                score: state.score + 5-state.wrongAnswers,
            }
        case actionTypes.STAGE_NEXT:
            return {
                ...state,
                isStageCompleted: false,
                stage: state.stage != state.stagesCount ? state.stage + 1 : state.stage,
                isGameCompleted: state.stage == state.stagesCount ? true:false,
                wrongAnswers: 0,
                selectedBird : {
                    selected: false
                }
            }
        case actionTypes.SELECT:
            return {
                ...state,
                selectedBird: action.selectedBird
            }
        case actionTypes.SELECT_ANSWER_BIRD:
            return {
                ...state,
                answerBird: action.selectedBird
            }
        case actionTypes.STAGE_WRONG_ANSWER:
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1
            }
        case actionTypes.SET_STAGES_COUNT:
            return {
                ...state,
                stagesCount: action.count - 1
            }
        case actionTypes.GAME_COMPLETED:
            return {
                ...state,
                isGameCompleted: true
            }
        case actionTypes.NEW_GAME:
            return {
                ...state,
                score: 0,
                stage: 0,
                isStageCompleted: false,
                isGameCompleted: false,
                selectedBird: {
                   selected: false
                },
                answerBird: {
                    selected: false
                 },
                wrongAnswers: 0
            }      
        default: return {...state}
    }
}

export default gameReducer