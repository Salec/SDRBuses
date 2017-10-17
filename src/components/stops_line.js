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
        return (
            <div>
                <h3 className="text-center text-primary">Stops from line {this.props.match.params.id}</h3>
                {this.renderStops()}
            </div>
        );
    };

    renderStops() {
        let goInfo =[];
        let goRep = [];
        let backRep = [];
        let backInfo = [];
        _.map(this.props.stops.resources, stop => {
            if (CONST_DIR_UP == stop['ayto:SentidoRuta']) {
                goRep.push(this.getStopInfo(stop));
                goInfo.push(stop);
            } else {
                backRep.push(this.getStopInfo(stop));
                backInfo.push(stop);
            }
        });
        return (
            <div>
                <div>
                    <ul id="up" className="list-group">IDA {goRep}   </ul>
                    <ul id="down" className="list-group">VUELTA {backRep}   </ul>
                </div>
                <StopsMap stops={goInfo}/>
            </div>


        )
    }

    getStopInfo(stop) {
        return (
        <li key={stop['dc:identifier']}>
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
