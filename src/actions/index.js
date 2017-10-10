import axios from 'axios';

export const LIST_BUSES = 'LIST_BUSES';
export const GET_STOPS_LINE = 'GET_STOPS_LINE';

const URL_API = 'http://datos.santander.es/api';
const URL_LIST_BUSES = '/rest/datasets/lineas_bus.json';
const URL_STOPS_LINE = '/rest/datasets/lineas_bus_secuencia.json';

export function fecthListBuses() {
    const request = axios.get(`${URL_API}${URL_LIST_BUSES}`);
    return({
        type: LIST_BUSES,
        payload: request
    })

}
export function fetchStopsLine(identifier) {
    //const request = axios.get("http://datos.santander.es/api/rest/datasets/lineas_bus_secuencia.json?query=ayto\:Linea:103");
    const request = axios.get(`${URL_API}${URL_LIST_BUSES}`);
    //console.log("request",`${URL_API}${URL_LIST_BUSES}?query=ayto\:Linea:${identifier}`);
    return{
        type: GET_STOPS_LINE,
        payload: request
    }
}

//dc:identifier
export function fetchTimes() {

}//url : http://datos.santander.es/api/rest/datasets/control_flotas_estimaciones.json
