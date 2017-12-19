import _ from 'underscore';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fecthListBuses} from '../actions/index';

class BusLines extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderLines() {

        return _.map(this.props.lines, bus => {
            return (
                <tr key={bus['dc:identifier']} onClick={this.goto}
                    data-url={"line/" + bus['dc:identifier']}>

                    <td>{bus['dc:name']}</td>
                    <td>{bus['ayto:numero']}</td>

                </tr>)
        })
    }

    goto = (event) => {
        this.props.history.push(event.target.parentElement.dataset.url)
    }

    render() {
        if (!this.props.lines) {
            return <div>{this.context.t("Loading...")}</div>
        }
        return (<div>

                <h3 className="text-center text-primary mt-2">{this.context.t("Line Index")}</h3>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>{this.context.t("Name")}</th>
                        <th>{this.context.t("Line")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderLines()}
                    </tbody>

                </table>
            </div>
        );
    };

    componentWillMount() {
        this.props.fecthListBuses();
    };
}
BusLines.contextTypes = {
    t: PropTypes.func
}
function mapStateToProps(state) {
    let order = _.sortBy(state.lines.busLines.resources, info => {
        return parseInt(info['dc:identifier']);
    });
    return {lines: order};

}

export default connect(mapStateToProps, {fecthListBuses})(BusLines);