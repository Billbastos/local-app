import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router basename="/local-app"> 
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
