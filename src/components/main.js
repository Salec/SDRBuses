/**
 * Created by Fernando on 11/10/2017.
 */
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import buses_lines from './buses_lines'
import stops_line from './stops_line';
import Nav from './navegation';
import Modal from './modal';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Nav/>
        <Switch>
            <Route exact path='/' component={buses_lines}/>
            <Route path='/line/:id' component={stops_line}/>
        </Switch>
        <Modal/>
    </main>
);

export default Main
