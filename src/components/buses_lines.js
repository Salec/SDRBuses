/**
 * Created by Fernando on 4/10/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthListBuses} from '../actions/index';
import {Link} from 'react-router';


class BusLines extends Component{

    renderLines() {
       return this.props.miPpt.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    
                </li>
            )
        })
    }

    render(){
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
    return {miPpt: state.lines.busLines};

}


export default connect(mapStateToProps, {fecthListBuses})(BusLines);