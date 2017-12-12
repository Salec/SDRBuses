/**
 * Created by Fernando on 13/11/2017.
 */
import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(<div>
            <h1 className="text-center text-primary mt-2">Sobre esta página</h1>
                <p className="text-center">Proyecto creado por Fernando Martín García usando técnologias de react y redux</p>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="well well-sm">
                                <div className="row">
                                    <div className="col-sm-6 col-md-8">
                                        <h4>Fernando Martín García</h4>
                                        <small><cite title="Santander, España">Santander, España <i className="glyphicon glyphicon-map-marker">
                                        </i></cite></small>
                                        <p>
                                            <i className="glyphicon glyphicon-envelope"/>fernando.martingar@gmail.com
                                            <br />
                                            <i className="glyphicon glyphicon-gift"/>Febrero 17, 1990</p>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary">
                                                Social</button>
                                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                                <span className="caret"/><span className="sr-only">RRSS</span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/fermartingar/">LinkedIn</a></li>
                                                <li><a target="_blank" href="https://github.com/Salec">Github</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}