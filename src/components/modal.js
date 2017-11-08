/**
 * Created by Fernando on 6/11/2017.
 */
import React, {Component} from 'react';
export const MODAL_ID = 'myModal';
import {fetchTimes} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {timesTable} from '../auxFunctions/common';

class Modal extends Component {
    render() {
        console.log("Modal render");

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
                            <div dangerouslySetInnerHTML={
                                {__html: timesTable(this.props.time.resources, this.props.stop, this.props.name,false)}
                            }/>
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

    componentWillReceiveProps(newPPts) {
        if(this.props.stop != newPPts.stop){
            this.props.fetchTimes(newPPts.stop);
        }
    }

}
function mapsStateToProps(state) {
    return {time: state.lines.time}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchTimes: fetchTimes}, dispatch)
}
export default connect(mapsStateToProps, mapDispatchToProps)(Modal);