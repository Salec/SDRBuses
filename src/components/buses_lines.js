/**
 * Created by Fernando on 4/10/2017.
 */
import _ from 'underscore';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthListBuses} from '../actions/index';
import Modal from './modal';

class BusLines extends Component {

    renderLines() {

        return _.map(this.props.lines, bus => {
            return (
                <tr key={bus['dc:identifier']} onClick={this.goto.bind(this)}
                    data-url={"line/" + bus['dc:identifier']}>

                    <td>{bus['dc:name']}</td>
                    <td>{bus['ayto:numero']}</td>

                </tr>)
        })
    }

    goto(event) {
        this.props.history.push(event.target.parentElement.dataset.url)
    }

    render() {
        if (!this.props.lines) {
            return <div>Loading...</div>
        }

        return (<div>

                <h3 className="text-center text-primary">Couch Lines Index</h3>
                <Modal/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Line</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderLines()}
                    </tbody>

                </table>
            </div>
        );
    };

    componentWillMount() {

        this.props.fecthListBuses();
    };
}

function mapStateToProps(state) {
    let order = _.sortBy(state.lines.busLines.resources, info =>{
        return parseInt(info['dc:identifier']);
    });
    return {lines: order};

}


export default connect(mapStateToProps, {fecthListBuses})(BusLines);