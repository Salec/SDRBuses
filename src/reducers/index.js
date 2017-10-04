import { combineReducers } from 'redux';
import BusesReducer from './reducer_buses';

const rootReducer = combineReducers({
  lines : BusesReducer
});

export default rootReducer;
