/**
 * Created by Fernando on 13/11/2017.
 */
import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(<div>
            <h3 className="text-center text-primary mt-2">Sobre esta página</h3>
                <p className="text-left">
                    Proyecto de código abierto creado por Fernando Martín usando técnologias de react y redux
                </p>
                <p className="text-left">Puedes contribuir con el projecto en github:
                    
                   
                    <a target="_blank" href="https://github.com/Salec/SDRBuses">
                    <button type="button" className="ml-3 btn btn-outline-info m">
                        <svg height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        Colabora
                    </button>
                    </a>
                    
                </p>
                <div className="container">
                    <div className="row justify-content-md-center">
                        
                        <h6 className="col-md-auto mt-5">
                        Actuales Colaboradores
                        </h6>
                    </div>

                    <div className="row">
                        <div class="col-sm-3">   
                            <div className="card" >
                                <img className="card-img-top" src="https://avatars1.githubusercontent.com/u/4624133?s=460&v=4" alt="Fernando Martín García"/>
                                <div className="card-body">
                                    <h4 className="card-title">Fernando Martín García</h4>
                                    <button type="button" className="btn btn-primary">Contacto</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="caret"/><span className="sr-only"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a target="_blank" href="https://www.linkedin.com/in/fermartingar/">LinkedIn</a></li>
                                        <li><a target="_blank" href="https://github.com/Salec">Github</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">   
                            <div className="card" >
                                <img className="card-img-top" src="..." alt="Tu cara aquí"/>
                                <div className="card-body">
                                    <h4 className="card-title">Tu nombre aquí</h4>
                                    <button type="button" className="btn btn-primary">Contacto</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="caret"/><span className="sr-only"></span>
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