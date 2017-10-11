/**
 * Created by Fernando on 11/10/2017.
 */
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import buses_lines from './buses_lines'
import stops_line from './stops_line';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={buses_lines}/>
            <Route path='/stops/:id' component={stops_line}/>
        </Switch>
    </main>
);

export default Main
