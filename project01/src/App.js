import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
       <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
