import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

// ? Templates
import Landing from './pages/Landing';


const RecetaId = () => {

  const { id } = useParams<{id: string}>();

  return (
    <div>
      <h3>ID: {id} </h3>
    </div>
  )

}


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <Landing type='admin' />
        </Route>
        <Route path='/receta/:id'>
        
        <RecetaId />
        </Route>
        <Route path='/'>
          <Landing type="mainpage"/>
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
