/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';
import proj4 from 'proj4';
import _ from  'underscore';

const EPSG_4326 = 'EPSG:4326';
const EPSG_23030 = 'EPSG:23030';

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

class StopsMap extends Component{
    componentDidMount(){
    }
    componentWillReceiveProps(newPPts){
        if(newPPts.stops && newPPts.stops.length != 0) {

            let map = new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: 43.46,
                    lng: -3.77
                }
            });
            let coord = proj4(EPSG_23030, EPSG_4326);
            _.map(newPPts.stops, stop => {
                let coordenadas =[parseInt(stop['ayto:PosX']),parseInt(stop['ayto:PosY'])];
                console.log('coordenadas before ' +stop['ayto:NombreParada']+':',coordenadas);
                let corr =coord.forward(coordenadas);
                console.log("vamos", corr);
                new google.maps.Marker({
                    position:{lat: corr[1], lng: corr[0]} ,
                    map: map,
                    title: stop['ayto:NombreParada']
                });
            });
        }
    }

    render(){
        return <div style={{width:'400px',height:'400px'}} ref="map"/>;
    }
}

export default StopsMap;

