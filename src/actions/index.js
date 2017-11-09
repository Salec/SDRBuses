import axios from 'axios';

export const LIST_BUSES = 'LIST_BUSES';
export const GET_STOPS_LINE = 'GET_STOPS_LINE';
export const GET_TIME_STOP = 'GET_TIME_STOP';
export const CHANGE_STOP = 'CHANGE_STOP';

const URL_API = 'http://datos.santander.es/api';
const URL_LIST_BUSES = '/rest/datasets/lineas_bus.json';
const URL_STOPS_LINE = '/rest/datasets/lineas_bus_secuencia.json';
const URL_STOP_TIME =  '/rest/datasets/control_flotas_estimaciones.json';

export function fecthListBuses() {
    const request = axios.get(`${URL_API}${URL_LIST_BUSES}`);
    return ({
        type: LIST_BUSES,
        payload: request
    })

}
export function fetchStopsLine(identifier) {
    const request = axios.get(`${URL_API}${URL_STOPS_LINE}?query=ayto\\:Linea:${identifier}`);
    return {
        type: GET_STOPS_LINE,
        payload: request
    }
}

//dc:identifier
export function fetchTimes(idStop) {
    const request = axios.get(`${URL_API}${URL_STOP_TIME}?query=ayto\\:paradaId:${idStop}`);
    return {
        type: GET_TIME_STOP,
        payload: request
    }
}
export function changeStop(stop){
    console.log('accion changeStop',stop);
    return {
        type: CHANGE_STOP,
        payload: stop
    }
}
