import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import NewContent from './pages/submit/NewContent';
import NewCategory from './pages/submit/NewCategory';
import Home from './pages/Home';

const Page404 = () => (<div>Page 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/submit/NewContent" component={NewContent} />
      <Route path="/submit/NewCategory" component={NewCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

