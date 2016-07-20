import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './component/app.js';
import Home from './component/home.js';
import About from './component/about/about.js';

const historyOptions = {
  queryKey : false
};

export default (
  <Router history={browserHistory}>
    <Route component={ App }>
      <Route path='/' component={ Home } >
      	<IndexRoute component={ About } />
      </Route>
    </Route>
  </Router>
);