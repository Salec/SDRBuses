/**
 * Created by Fernando on 4/10/2017.
 */
import {LIST_BUSES, GET_STOPS_LINE} from '../actions/index';
const INITIAL_STATE = {busLines: [], stops: []};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_BUSES:
            return {...state, busLines: action.payload.data};
        case  GET_STOPS_LINE:
            return {...state, stops: action.payload.data};
        default:
            return state;
    }
}
