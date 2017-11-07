/**
 * Created by Fernando on 10/10/2017.
 */
import _ from  'underscore';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchStopsLine} from '../actions/index';
import StopsMap from './stopsMap_list';
import Modal, {MODAL_ID} from './modal';

const CONST_DIR_UP = 1;

class StopsLine extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {stop: false, name: ''};
    }

    render() {
        if (!this.props) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Modal stop={this.state.stop} name={this.state.name}/>
                <h3 className="text-center text-primary">Paradas línea {this.props.match.params.id}</h3>
                {this.renderStops()}
            </div>
        );
    };

    renderStops() {
        let goInfo = [];
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
        if (backInfo.length === 0) {
            console.log("circular");
            return (
                <table className="table table-striped table-hover ">
                    <thead>
                    <tr >
                        <th className="numP">Numero Parada</th>
                        <th >Nombre Parada</th>
                    </tr>
                    </thead>
                    <tbody>
                    {goRep}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2">
                            <StopsMap stops={goInfo}/>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            );

        } else {
            console.log("ida vuelta");
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-hover table-responsive-sm ">
                                <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h4 className="tableTitle">IDA</h4>
                                    </td>
                                </tr>
                                <tr >
                                    <th className="numP">Numero Parada</th>
                                    <th >Nombre Parada</th>
                                </tr>
                                </thead>
                                <tbody>
                                {goRep}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="2">
                                        <StopsMap stops={goInfo}/>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="col">
                            <table className="table table-striped table-hover table-responsive-sm">
                                <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h4 className="tableTitle">VUELTA</h4>
                                    </td>
                                </tr>
                                <tr >
                                    <th className="numP">Número Parada</th>
                                    <th >Nombre Parada</th>

                                </tr>
                                </thead>
                                <tbody>
                                {backRep}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="2">
                                        <StopsMap stops={backInfo}/>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    }

    getStopInfo(stop) {
        //<StopsMap stops={backInfo}/>
        return (

            <tr data-url={stop['ayto:NParada']} data-name={stop['ayto:NombreParada']} key={stop['dc:identifier']}
                onClick={(e) => {
                    this.setState({
                        stop: e.target.parentElement.dataset.url,
                        name: e.target.parentElement.dataset.name
                    });
                    $(`#${MODAL_ID}`).modal('show');
                }}

            >
                <th className="numP">{stop['ayto:NParada']}</th>
                <td>{stop['ayto:NombreParada']}</td>
            </tr>
        )
    }

    componentWillMount() {
        this.props.fetchStopsLine(this.props.match.params.id);
    }
}


function mapStateToProps(state) {
    return {stops: state.lines.stops}

}
export default connect(mapStateToProps, {fetchStopsLine})(StopsLine);
