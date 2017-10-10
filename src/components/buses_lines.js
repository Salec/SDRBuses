/**
 * Created by Fernando on 4/10/2017.
 */
import _ from 'underscore';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthListBuses} from '../actions/index';
import {Link} from 'react-router';


class BusLines extends Component {

    renderLines() {

        return _.map(this.props.lines.resources, bus => {
            return (
                <tr key={bus['dc:identifier']}>
                    <Link to={"linea/" +bus['dc:identifier']}>
                        <td>{bus['dc:name']}</td>
                        <td> {bus['ayto:numero']}</td>
                    </Link>
                </tr>)
        })
    }

    render() {
        if (!this.props.lines) {
            return <div>Loading...</div>
        }

        return (<div>

                <h3 className="text-center text-primary">Couch Lines Index</h3>
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

    componentWillMount(){

        this.props.fecthListBuses();
        console.log("componentWillMount",this.props);
    };
}

function mapStateToProps(state) {
    return {lines: state.lines.busLines};

}


export default connect(mapStateToProps, {fecthListBuses})(BusLines);