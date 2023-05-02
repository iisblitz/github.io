import { combineReducers } from "redux";

const initialState = {
    data:[],
    allTimeline: [],
    allArticles: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_TIMELINE":
            return {
                ...state,
                allTimeline: action.payload
            }   
        case "GET_ARTICLE":
            return {
                ...state,
                allArticles: action.payload
            }
        case 'LOAD_DATA':
            return {
              ...state,
              data: action.payload,
            };
        default: return state;
        }
}

export default combineReducers({rootReducer})