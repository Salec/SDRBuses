/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';
import utmObj from 'utm-latlng';
import _ from  'underscore';

const UTMZoneNumber = 30;
const UTMZoneLetter = 'N';


class StopsMap extends Component{
    componentDidMount(){
    }
    componentWillReceiveProps(newPPts){
        if(newPPts.stops && newPPts.stops.length != 0) {
            let utm = new utmObj('ED50');

            let map = new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: 43.46,
                    lng: -3.77
                }
            });
            console.log('dentr0', newPPts.stops);
            _.map(newPPts.stops, stop => {
                let debug = {PosX: stop['ayto:PosX'], PosY: stop['ayto:PosY']};
                console.log( stop['ayto:NombreParada'],debug ,utm.convertUtmToLatLng(stop['ayto:PosX'], stop['ayto:PosY'], UTMZoneNumber, UTMZoneLetter));
                new google.maps.Marker({
                    position: utm.convertUtmToLatLng(stop['ayto:PosX'], stop['ayto:PosY'], UTMZoneNumber, UTMZoneLetter),
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

