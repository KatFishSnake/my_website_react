import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './component/app.js';
import Home from './component/home.js';
import About from './component/about/about.js';

import AppList from './component/apps/applist';

import auth from './shared/auth';

const historyOptions = {
  queryKey : false
};

export default (
  <Router history={browserHistory}>
    <Route component={ App }>
      <Route path='/' component={ Home } >
      	<IndexRoute component={ About } />
      	<Route path="apps" component={ AppList } onEnter={auth.requireAuth} />
      </Route>
    </Route>
  </Router>
);