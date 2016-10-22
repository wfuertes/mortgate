import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App';
import HomeBox from './Home';
import AboutBox from './About';
import ChatBox from './Chat';
import './index.css';

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeBox} />
      <Route path="/chat" component={ChatBox} />
      <Route path="/about" component={AboutBox} />
    </Route>
  </Router>),
  document.getElementById('root')
);
