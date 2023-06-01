import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer';
import { loadData, loadArt, loadTexts, loadCatalog, loadNotes } from './actions';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

store.dispatch(loadData());
store.dispatch(loadArt());
store.dispatch(loadTexts());
store.dispatch(loadCatalog());
store.dispatch(loadNotes());

export default store;