/**
 * Created by Fernando on 10/10/2017.
 */
import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchStopsLine} from '../actions/index'

class StopsLine extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        if (!this.props) {
            return <div>Loading...</div>
        }
        console.log("render",this.props);
        return (

               <h1>OCUC</h1>
        );
    };


    componentWillMount() {
        console.log("Paradas", this.props.params.id);
        this.props.fetchStopsLine(this.props.params.id);
    }
}


function mapStateToProps(state) {
    return {stops: state.lines.stops}

}
export default connect(mapStateToProps, {fetchStopsLine})(StopsLine);
