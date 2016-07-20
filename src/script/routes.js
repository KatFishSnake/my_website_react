import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './component/app.js';
import Home from './component/home.js';

const historyOptions = {
  queryKey : false
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='home' component={ Home } />
    </Route>
  </Router>
);