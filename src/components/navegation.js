import React from 'react';
import { withRouter } from 'react-router-dom';


 class Nav extends React.Component {
    constructor() {
        super();


        //this.onInputSubmit = this.onInputSubmit.bind(this);
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <button type="button" className="btn btn-outline-info" onClick={() =>{this.props.history.push('/')}}>Inicio</button>
                <form className="form-inline">
                    <input className="form-control mr-sm-0" type="search" placeholder="Número Parada"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tiempo</button>
                </form>
            </nav>
        );
    }

}
Nav = withRouter(Nav);
export default Nav;