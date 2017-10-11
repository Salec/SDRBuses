/**
 * Created by Fernando on 10/10/2017.
 */
import _ from  'underscore';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchStopsLine} from '../actions/index'

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
                <ul className="list-group">
                    {this.renderStops()}
                </ul>
            </div>
        );
    };

    renderStops() {

        return _.map(this.props.stops.resources, stop => {
            return (
                <li key={stop['dc:identifier']}>
                    <span>{stop['ayto:NombreParada']}</span>
                    <strong> {stop['ayto:NParada']}</strong>
                </li>);
        })
    }

    componentWillMount() {
        this.props.fetchStopsLine(this.props.match.params.id);
    }
}


function mapStateToProps(state) {
    return {stops: state.lines.stops}

}
export default connect(mapStateToProps, {fetchStopsLine})(StopsLine);
