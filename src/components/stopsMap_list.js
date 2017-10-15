/**
 * Created by fernando on 10/15/17.
 */
import React, {Component} from 'react';

class StopsMap extends Component{
    componentDidMount(){
        var uluru = {lat: 51.5, lng: -0.12};
        var map = new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat: 51.5,
                lng: -0.12
            }
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            title: 'NPI',
            label: 'B'
        });
    }

    render(){
        return <div style={{width:'400px',height:'400px'}} ref="map"/>;
    }
}

export default StopsMap;

