/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';
import utmObj from 'utm-latlng';
import _ from  'underscore';

const UTMZoneNumber = 30;
const UTMZoneLetter = 'T';


class StopsMap extends Component{
    componentDidMount(){
        let utm = new utmObj('ED50');

        let map = new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat: 43.44,
                lng: -3.8
            }
        });
        console.log('dentr0',this.props.stops);
        if(this.props.stops) {
            _.map(this.props.stops, stop => {
                console.log(utm.convertUtmToLatLng(stop['ayto:PosX'], stop['ayto:PosY'], UTMZoneNumber, UTMZoneLetter));
                new google.maps.Marker({
                    position: utm.convertUtmToLatLng(stop['ayto:PosX'], stop['ayto:PosY'], UTMZoneNumber, UTMZoneLetter),
                    map: map,
                    title: 'NPI'
                });
            });
        }
    }
    componentWillReceiveProps(ppts){
        console.log("ppt2",ppts);
    }

    render(){
        console.log("render",this.props.stops);
        return <div style={{width:'400px',height:'400px'}} ref="map"/>;
    }
}

export default StopsMap;

