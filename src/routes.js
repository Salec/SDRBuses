import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import BusLines  from './components/buses_lines';


export default(
<Route path='/' component={App}>
	<IndexRoute component={BusLines}/>	
</Route>
);

//this.props.params.id