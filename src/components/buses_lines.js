/**
 * Created by Fernando on 4/10/2017.
 */
import _ from 'underscore';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthListBuses} from '../actions/index';
import {Link} from 'react-router';


class BusLines extends Component{

    renderLines() {

        _.map(this.props.lines.resources, bus => {
            console.log("log Bueno", bus);
          return(  

            <li className="list-group-item" key={bus.uri}>
                {bus.uri}
            </li>)
        })
    }

    render(){
        if(!this.props.lines){
            return <div>Loading...</div>
        }

        return (<div>

                <h3>Buses</h3>
                <ul className="list-group">
                    {this.renderLines()}
                </ul>
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