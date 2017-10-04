import axios from 'axios';

export const LIST_BUSES = 'LIST_BUSES';

const URL_API = 'http://datos.santander.es/api';
const URL_LIST_BUSES = '/rest/datasets/lineas_bus.json';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=i4jfk4k69gl4foemqllf';


/**export function fecthListBuses() {
    const request = axios.get(`${URL_API}${URL_LIST_BUSES}`);
    return({
        type: LIST_BUSES,
        payload: request
    })

}*/
export function fecthListBuses(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return({
		type: LIST_BUSES,
		payload: request
	});
}



export function fetchTimes() {

}//url : http://datos.santander.es/api/rest/datasets/control_flotas_estimaciones.json
