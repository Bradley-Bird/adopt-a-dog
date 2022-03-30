import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import New from './pages/New';
import Details from './pages/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/dogs/new">
            <New />
          </Route>
          <Route path="/dogs/:id/edit">
            <Edit />
          </Route>
          <Route path="/dogs/:id">
            <Details />
          </Route>
          <Route path="/auth">
            <Auth />
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
