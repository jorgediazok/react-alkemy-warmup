//ROUTING
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//PAGES

import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import EditPost from './pages/EditPost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <Route exact path="/" component={Home} />

          <Route exact path="/add" component={AddPost} />

          <Route path="/edit/:id" component={EditPost} />

          <Route path="/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
