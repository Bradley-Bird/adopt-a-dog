import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import New from './pages/New';
import Details from './pages/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/dogs/new">
            <New />
          </Route>
          <Route path="/dogs/:id">
            <Details />
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
