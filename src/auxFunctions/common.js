/**
 * Created by Fernando on 8/11/2017.
 */
import _ from  'underscore';
//60 min max time to show
const MAX_TIME_TO_CONSIDER = 5400;
//4 minutes max time ignore the result (time in miliseconds)
const MAX_DIFF_TO_CONSIDER = 240000;

export function timesTable(times, Nstop, nameStop, title = true) {
    let titleInfo = (title) ? `<div class="infoStop">Parada <b>${Nstop}</b>: <span class="badge badge-pill badge-info">${nameStop}</span></div>` : '';
    let content = `${titleInfo}<table id="infoTable"><tbody>`;
    let filterArray = _.filter(
        times,
        (it) => {
            return (it['ayto:tiempo1'] != 0 && it['ayto:tiempo1'] < MAX_TIME_TO_CONSIDER && !isTooOldToConsider(it))
        }
    );
    let order = _.sortBy(filterArray, info => {
        return parseInt(info['ayto:tiempo1']);
    });
    _.map(order, info => {
        content += "<tr><td>" + info['ayto:etiqLinea'] + '</td><td>' + info['ayto:destino1'] + "</td><td><b>" +
            Math.round(info['ayto:tiempo1'] / 60) + "</b> min</td></tr>";
    });
    content += ' </tbody></table>';
    return content;
}
export function orderTimes(times) {
    let filterArray = _.filter(
        times,
        (it) => {
            return (it['ayto:tiempo1'] != 0 && it['ayto:tiempo1'] < MAX_TIME_TO_CONSIDER && !isTooOldToConsider(it))
        }
    );
    let order = _.sortBy(filterArray, info => {
        return parseInt(info['ayto:tiempo1']);
    });
    return order;
}
function isTooOldToConsider(row) {
    return (new Date(row['dc:modified']) - new Date(row['ayto:fechActual']) >
    MAX_DIFF_TO_CONSIDER);
}