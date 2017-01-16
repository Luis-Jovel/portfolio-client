import React from 'react';
import render from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// App
import './index.css';
import App from './components/App';
import HomePage from './pages/home';
render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="*" component={HomePage} />
  </Router>,
  document.getElementById('root'),
);
