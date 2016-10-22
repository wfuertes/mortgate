import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomeBox from './Home';
import AboutBox from './About';
import ChatBox from './Chat';
import './index.css';
import { Router, Route, browerHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  (<Router history={browerHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="/" component={HomeBox} />
      <Route path="/chat" component={ChatBox} />
      <Route path="/about" component={AboutBox} />
    </Route>
  </Router>),
  document.getElementById('root')
);
