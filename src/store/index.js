import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import gameReducer from "./reducers/gameReducer.js"

const rootReducer = combineReducers({
    game: gameReducer,
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))