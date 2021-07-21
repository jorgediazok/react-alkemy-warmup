import React from 'react';

//ROUTING
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//PAGES

import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
          <Route path="/add">
            <AddPost />
          </Route>
          <Route path="/edit/:id">
            <EditPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
