/**
 * Created by Fernando on 4/10/2017.
 */
import {LIST_BUSES, GET_STOPS_LINE, GET_TIME_STOP, NEW_STOP} from '../actions/index';
const INITIAL_STATE = {busLines: [], stops: [], time:[], stop: null, name:''};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_BUSES:
            return {...state, busLines: action.payload.data};
        case  GET_STOPS_LINE:
            return {...state, stops: action.payload.data};
        case  GET_TIME_STOP:
            return {...state, time: action.payload.data};
            //TODO new action to represent current stop
        case NEW_STOP:
            return {...state, stop: action.payload.stop, name: action.payload.name}
        default:
            return state;
    }
}
