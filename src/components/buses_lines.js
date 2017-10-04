/**
 * Created by Fernando on 4/10/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthListBuses} from '../actions/index';
import {Link} from 'react-router';


class BusLines extends Component{

    renderPosts() {
        return this.props.list.map((line) => {
            return (
                console.log(line)
            )
        })
    }

    render(){
        return (<div>

                <h3>Buses</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    };

    componentWillMount(){
        this.props.fetchPost();
    };
}


function mapStateToProps(state) {
    return {busLines: state.posts.busLines};

}

export default connect(mapStateToProps, {fecthListBuses})(BusLines);