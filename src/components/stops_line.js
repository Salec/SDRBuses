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
        console.log("len:",backInfo.length,this);
        if (1 === 0) {
        //     return (
        //         <div className="container">
        //             <div className="row align-items-center">
        //                 <div className="col">
        //                     <ul id="up" className="list-group">CIRCULAR {goRep}   </ul>
        //                 </div>
        //                 <div className="row">
        //                     <div className="col">
        //                         <StopsMap stops={goInfo}/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        } else {
            return (
                <table className="table table-striped table-hover table-responsive-sm">
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
                            <StopsMap span="2" stops={goInfo}/>
                        </tr>
                    </tfoot>
                </table>);
        }
    }

    getStopInfo(stop) {
        //
        //<StopsMap stops={backInfo}/>
        return (
            <tr key={stop['dc:identifier']}>
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
