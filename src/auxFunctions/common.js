/**
 * Created by Fernando on 8/11/2017.
 */
import _ from  'underscore';
//90 min max time to show
const MAX_TIME_TO_CONSIDER = 5400;

export function timesTable(times,Nstop,nameStop, title = true) {
    let titleInfo =(title) ? `<div class="infoStop">Parada <b>${Nstop}</b>: <span class="badge badge-pill badge-info">${nameStop}</span></div>` : '';
    let content = `${titleInfo}<table id="infoTable"><tbody>`;
    let filterArray = _.filter(

        times,
        (it) => {return (it['ayto:tiempo1'] != 0 && it['ayto:tiempo1'] < MAX_TIME_TO_CONSIDER)
        }
    );
    let order = _.sortBy(filterArray, info =>{
        return parseInt(info['ayto:tiempo1']);
    });
    _.map(order, info => {
        content += "<tr><td>"+ info['ayto:etiqLinea']+'</td><td>'+info['ayto:destino1'] +":</td><td>ETA: <b>" +
            Math.round(info['ayto:tiempo1'] / 60) + "</b> min</td></tr>";
    });
    content +=' <tbody></table>';
    return content;
}