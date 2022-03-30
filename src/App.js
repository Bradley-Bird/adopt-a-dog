import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import New from './pages/New';
import Details from './pages/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Auth from './pages/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <Nav currentUser={currentUser} />
      <div className="App">
        <Switch>
          <Route path="/dogs/new">
            <New />
          </Route>
          <Route path="/dogs/:id/edit">
            <Edit />
          </Route>
          <Route path="/dogs/:id">
            <Details currentUser={currentUser} />
          </Route>
          <Route path="/auth">
            <Auth {...{ setCurrentUser }} />
          </Route>
          <Route path="/dogs">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
