import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import BusLines from './components/buses_lines';
import StopLine from './components/stops_line';

export default(
<Route path='/' component={App}>
	<IndexRoute component={BusLines}/>
	<Route path="stops/:id" component={StopLine}/>
</Route>
);

//this.props.params.id