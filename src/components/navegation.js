import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeStop} from '../actions/index';
const SCHEDULE = "http://www.tusantander.es/sites/tus.int.ayto-santander.es/files/tusinvierno2017_optimizado.pdf";
const MAP = "http://www.tusantander.es/sites/tus.int.ayto-santander.es/files/planos-red-lineas_1.pdf";
class Nav extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light  " >
                <button type="button" className="btn btn-outline-info" onClick={() =>{this.props.history.push('/')}}>Inicio</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>



                <div className="navbar-collapse collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Más...
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a target="_blank" className="dropdown-item" href={SCHEDULE}>Horarios</a>
                                <a target="_blank" className="dropdown-item" href={MAP}>Plano
                                    General</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/about">Acerca de la página</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.onFormSubmit}>
                        <input className="form-control mr-sm-2" type="number" min="0"
                               placeholder="Número Parada"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tiempo</button>
                    </form>
                </div>
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