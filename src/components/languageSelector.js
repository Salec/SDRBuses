import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLanguage} from "redux-i18n";

class LanguageSelector extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="ml-2 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Idioma
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={() => {this.props.dispatch(setLanguage("es"))}} href="#">Español</a>
                    <a className="dropdown-item" onClick={() => {this.props.dispatch(setLanguage("en"))}} href="#">English</a>
                </div>
            </div>
        );
    }
}
export default connect(state => ({
    lang: state.i18nState.lang,
}))(LanguageSelector)