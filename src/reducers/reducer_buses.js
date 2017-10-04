/**
 * Created by Fernando on 4/10/2017.
 */
import {LIST_BUSES} from '../actions/index';
const INITIAL_STATE = {busLines:[]};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case LIST_BUSES:
            return {...state , busLines : action.payload.data};
        default:
            return state;
    }
}
