/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';
import proj4 from 'proj4';
import _ from  'underscore';

const EPSG_4326 = 'EPSG:4326';
const EPSG_23030 = 'EPSG:23030';
const N_INTERVALS = 18;

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
        this.state ={NParada : null}
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
                    clickable: true
                });
                marker.addListener('click', function() {
                    that.infowindow.open(marker.get('map'), marker);
                });
                this.infowindow.setContent('asdfds');
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

    render() {
        return <div style={{width: '100%', height: '400px'}} ref="map"/>;
    }
}

export default StopsMap;

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
