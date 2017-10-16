/**
 * Created by Fernando on 10/10/2017.
 */
import _ from  'underscore';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchStopsLine} from '../actions/index';
import StopsMap from './stopsMap_list';

const CONST_DIR_UP = 1;

class StopsLine extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        if (!this.props) {
            return <div>Loading...</div>
        }
        console.log("Paradas", this.props.stops.resources);
        return (
            <div>
                <h3 className="text-center text-primary">Stops from line {this.props.match.params.id}</h3>
                {this.renderStops()}
            </div>
        );
    };

    renderStops() {
        let go = [];
        let back = [];
        _.map(this.props.stops.resources, stop => {
            if (CONST_DIR_UP == stop['ayto:SentidoRuta']) {
                go.push(this.getStopInfo(stop))
            } else {
                back.push(this.getStopInfo(stop))
            }
        });
        return (
            <div>
                <div>
                    <ul id="up" className="list-group">IDA {go}   </ul>
                    <ul id="down" className="list-group">VUELTA {back}   </ul>
                </div>
                <StopsMap stops={go}/>
            </div>


        )
    }

    getStopInfo(stop) {
        return (  <li key={stop['dc:identifier']}>
            <span>{stop['ayto:NombreParada']}</span>
            <strong> {stop['ayto:NParada']}</strong>
        </li>)
    }

    componentWillMount() {
        this.props.fetchStopsLine(this.props.match.params.id);
    }
}


function mapStateToProps(state) {
    return {stops: state.lines.stops}

}
export default connect(mapStateToProps, {fetchStopsLine})(StopsLine);
