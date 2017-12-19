import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeStop} from '../actions/index';
import LanguageSelector from "./languageSelector"
import PropTypes from 'prop-types';

const SCHEDULE = "http://www.tusantander.es/sites/tus.int.ayto-santander.es/files/tusinvierno2017_optimizado.pdf";
const MAP = "http://www.tusantander.es/sites/tus.int.ayto-santander.es/files/planos-red-lineas_1.pdf";
class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                <button type="button" className="btn btn-outline-info" onClick={() => {
                    this.props.history.push('/')
                }}>{this.context.t("Home")}</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>


                <div className="navbar-collapse collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.context.t("More...")}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="downloadDropdown">
                                <a className="dropdown-item disabled" href="/fares">{this.context.t("Fares")}</a>
                                <a className="dropdown-item disabled" href="/recharge">{this.context.t("Where to top up")}</a>
                                <a className="dropdown-item" href="/about">{this.context.t("About the page")}</a>
                                
                            </div>
                        </li>
                    </ul>
                
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dowloadDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.context.t("Downloads")}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dowloadDropdown">
                                    <a target="_blank" className="dropdown-item"
                                    href={SCHEDULE}>{this.context.t("Schedule")}</a>
                                    <a target="_blank" className="dropdown-item" href={MAP}>{this.context.t("Map")}</a>
                            </div>
                        </li>
                    </ul>
                
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.onFormSubmit}>
                        <input className="form-control mr-sm-2" type="number" min="0"
                               placeholder={this.context.t("Stop Number")}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.context.t("Time")}</button>
                    </form>
                    <LanguageSelector/>
                </div>
            </nav>

        );
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.changeStop({stop: event.target[0].value});
    }

}
Nav.contextTypes = {
    t: PropTypes.func
}
function mapsStateToProps(state) {
    return {
        stop: state.lines.stop,
    }
}
Nav = withRouter(Nav);
export default connect(mapsStateToProps, {changeStop})(Nav);