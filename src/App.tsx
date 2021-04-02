import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ? Templates
import Landing from './components/templates/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
