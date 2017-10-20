/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';
import proj4 from 'proj4';
import _ from  'underscore';
import {fetchTimes} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const EPSG_4326 = 'EPSG:4326';
const EPSG_23030 = 'EPSG:23030';
const N_INTERVALS = 18;
//90 min max time to show
const MAX_TIME_TO_CONSIDER = 5400;

proj4.defs([
    [
        EPSG_4326,
        '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'
    ],
    [
        EPSG_23030,
        '+title=ED50 (UTM) +proj=utm +zone=30 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs'
    ]
]);

class StopsMap extends Component {


    constructor(props){
        super(props);
        this.state ={NStop : null};
        this.timesToHtml = this.timesToHtml.bind(this);
    }
    shouldComponentUpdate(){
        return false;
    }
    componentDidMount(){
        this.map = new google.maps.Map(this.refs.map, {
            zoom: 13,
            center: {
                lat: 43.4614,
                lng: -3.8163
            }
        });
        this.infowindow = new google.maps.InfoWindow();
    }
    componentWillReceiveProps(newPPts) {
        if (newPPts.stops && newPPts.stops.length != 0) {
            let that = this;
            let coordParser = proj4(EPSG_23030, EPSG_4326);
            let routeCoordinates = [];
            _.map(newPPts.stops, stop => {
                let coordinates23030 = [parseInt(stop['ayto:PosX']), parseInt(stop['ayto:PosY'])];
                let corr = coordParser.forward(coordinates23030);
                let singleCoord = {lat: corr[1], lng: corr[0]};
                routeCoordinates.push(singleCoord);

                let marker = new google.maps.Marker({
                    position: singleCoord,
                    map: this.map,
                    scrollwheel: true,
                    title: stop['ayto:NombreParada'],
                    stop: stop["ayto:NParada"],
                    clickable: true
                });
                marker.addListener('click', function(e) {
                    that.infowindow.open(marker.get('map'), marker);
                    //that.setState({NParada: this.stop});
                    that.props.fetchTimes(this.stop).then(that.timesToHtml);

                    that.setState({NStop : this.stop, nameStop: this.title});
                    //TODO create another action to represent current stop
                });

            });
            let lineSymbol = {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
            };
            let flightPath = new google.maps.Polyline({
                path: routeCoordinates,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                icons: generatePercentages(lineSymbol)
            });

            flightPath.setMap(this.map);
        }
    }
    timesToHtml(response){
        let content = `<div class="infoStop">Parada <b>${this.state.NStop}</b>: <span class="badge badge-pill badge-info">${this.state.nameStop}</span></div><table id="infoTable"><tbody>`;
        let filterArray = _.filter(
            response.payload.data.resources,
            (it) => {return (it['ayto:tiempo1'] != 0 && it['ayto:tiempo1'] <MAX_TIME_TO_CONSIDER)
            }
        );
        let order = _.sortBy(filterArray, info =>{
            return parseInt(info['ayto:tiempo1']);
        });
        console.log('ordenado', order);
        _.map(order, info => {
            content += "<tr><td>"+"Linea " + info['ayto:etiqLinea'] +":</td><td>ETA: <b>" +
                Math.round(info['ayto:tiempo1'] / 60) + "</b> min</td></tr>";
        });
        content +=' <tbody></table>';
        this.infowindow.setContent(content);
    }


    render() {
        return <td colSpan={this.props.span} style={{width: '100%', height: '400px'}} ref="map"/>;
    }
}
function mapsStateToProps(state) {
    return {time: state.lines.time}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchTimes : fetchTimes}, dispatch)
}
function generatePercentages(lineSymbol) {
    let icons = [];
    let landa = 100/N_INTERVALS;
    for (let i = 0;i<N_INTERVALS;i++){
        icons.push({
            icon: lineSymbol,
            offset: i*landa+'%',
        })
    }
    return icons;
}
export default connect(mapsStateToProps, mapDispatchToProps)(StopsMap);


