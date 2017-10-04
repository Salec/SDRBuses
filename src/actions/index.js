import axios from 'axios';

export const LIST_BUSES = 'LIST_BUSES';

const URL_API = 'http://datos.santander.es/api';
const URL_LIST_BUSES = '/rest/datasets/lineas_bus.json';


export function fecthListBuses() {
    const request = axios.get(`${URL_API}${URL_LIST_BUSES}`);
    return({
        type: LIST_BUSES,
        payload: request
    })

}



export function fetchTimes() {

}//url : http://datos.santander.es/api/rest/datasets/control_flotas_estimaciones.json
