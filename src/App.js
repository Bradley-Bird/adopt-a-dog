import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
