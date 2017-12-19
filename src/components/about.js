import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
    render() {
        return (<div>
                <h3 className="text-center text-primary mt-2">{this.context.t("About this page")}</h3>
                <p className="text-left">{this.context.t("Open source project created by Fernando Martín García usign react and redux tecnologies")}
                </p>
                <p className="text-left">{this.context.t("You can collaborate with the project in github:")}
                    <a target="_blank" href="https://github.com/Salec/SDRBuses">
                        <button type="button" className="ml-3 btn btn-outline-info m">
                            <svg height="32" version="1.1" viewBox="0 0 16 16" width="32">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                            {this.context.t("Collaborate")}
                        </button>
                    </a>

                </p>
                <div className="container">
                    <div className="row justify-content-md-center">

                        <h6 className="col-md-auto mt-5">
                            {this.context.t("Current Colaborators")}
                        </h6>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <img className="card-img-top"
                                     src="https://avatars1.githubusercontent.com/u/4624133?s=460&v=4"
                                     alt="Fernando Martín García"/>
                                <div className="card-body">
                                    <h4 className="card-title">Fernando Martín García</h4>
                                    <button type="button"
                                            className="btn btn-primary">{this.context.t("Contacto")}</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown">
                                        <span className="caret"/>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a target="_blank"
                                               href="https://www.linkedin.com/in/fermartingar/">LinkedIn</a></li>
                                        <li><a target="_blank" href="https://github.com/Salec">Github</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img className="card-img-top" src="" alt="Your photo here"/>
                                <div className="card-body">
                                    <h4 className="card-title">{this.context.t("Your name here")}</h4>
                                    <button type="button"
                                            className="btn btn-primary">{this.context.t("Contact")}</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown">
                                        <span className="caret"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
About.contextTypes = {
    t: PropTypes.func
}