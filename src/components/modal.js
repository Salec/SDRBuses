/**
 * Created by Fernando on 6/11/2017.
 */
import React, {Component} from 'react';
export const MODAL_ID = 'myModal';
import {fetchStopsLine} from '../actions/index';

class Modal extends Component {
    render() {
        console.log(this);
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
                            <p>Modal body text goes here.</p>
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
}
export default Modal;