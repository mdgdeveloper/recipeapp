import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ? Templates
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/add'>
          FUNCIONA!!!
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
