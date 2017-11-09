/**
 * Created by Fernando on 6/11/2017.
 */
import React, {Component} from 'react';
export const MODAL_ID = 'myModal';
import {fetchTimes} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {orderTimes} from '../auxFunctions/common';
import _ from 'underscore';

class Modal extends Component {
    render() {
        console.log("Modal render",this);

        return (

            <div className="modal" tabIndex="-1" role="dialog" id={MODAL_ID}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Tiempo Parada {this.props.stop} - <b>{this.props.name}</b></h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table id="infoTable">

                            <tbody>{this.printTimes()}</tbody></table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            >Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    
    printTimes(){
        return _.map(orderTimes(this.props.time), time => {
            return (
            <tr>
                <td> {time['ayto:etiqLinea']}</td>
                <td> {time['ayto:destino1']} </td>
                <td>ETA: <b> {Math.round(info['ayto:tiempo1'] / 60)} </b> min</td>
            </tr>
            )
        })
    }

    componentWillReceiveProps(newPPts) {
        console.log('newProps', newPPts);
        if(this.props.stop != newPPts.stop){
            this.props.fetchTimes(newPPts.stop);
            $(`#${MODAL_ID}`).modal('show');
        }
    }
   
   }
function mapsStateToProps(state) {
    return {time: state.lines.time,
            stop: state.lines.stop,
            name: state.lines.name
        }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchTimes: fetchTimes}, dispatch)
}
export default connect(mapsStateToProps, mapDispatchToProps)(Modal);