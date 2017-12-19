import {combineReducers} from 'redux';
import {i18nState} from "redux-i18n"
import BusesReducer from './reducer_buses';

const rootReducer = combineReducers({
    lines: BusesReducer,
    i18nState
});

export default rootReducer;
