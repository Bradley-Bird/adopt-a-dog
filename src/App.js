import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
