import { combineReducers } from "redux";

const initialState = {
    time:[],
    arts:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOAD_DATA':
            return {
              ...state,
              time: action.payload,
            };
        case 'LOAD_ARTICLES':
            return {
                ...state,
                arts: action.payload,
            }
        default: return state;
        }
}

export default combineReducers({rootReducer})