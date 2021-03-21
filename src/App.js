import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Challenge from './components/challenge/challenge'
import Home from './components/home/home'
import TopNav from './components/Nav/TopNav/TopNav'


function App() {
  return (
<Router>
  <TopNav/>
  <Switch>
    <Route path='/challenge' component={Challenge}/>
    <Route path='/' component={Home}/>
  </Switch>
</Router>
  );
}

export default App;
