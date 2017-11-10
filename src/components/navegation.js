import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeStop} from '../actions/index';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <button type="button" className="btn btn-outline-info" onClick={() =>{this.props.history.push('/')}}>Inicio</button>
                <form className="form-inline" onSubmit={this.onFormSubmit}>
                    <input className="form-control mr-sm-0" type="number" min="0" placeholder="Número Parada"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tiempo</button>
                </form>
            </nav>
        );
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.changeStop({stop: event.target[0].value});
    }

}
function mapsStateToProps(state) {
    return {
        stop: state.lines.stop,
    }
}
Nav = withRouter(Nav);
export default connect(mapsStateToProps,{changeStop})(Nav);