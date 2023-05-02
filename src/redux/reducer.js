const initialState = {
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
        case "GET_ARTICLES":
            return {
                ...state,
                allArticles: action.payload
            }
        default: return state;
        }
}