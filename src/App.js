// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Challenge from './components/challenge/challenge'
import Home from './components/home/home'
import TopNav from './components/Nav/TopNav/TopNav'


function App() {

// const [items, setItems] = useState([])
// const [isLoading, setIsLoading] = useState(true)


// useEffect(()=>{
//   const fetchItems = async () => {

//     //https://api.binance.us/api/v3/ticker/24hr
//     const result = await axios(`https://api.binance.us/api/v3/ticker/24hr`)

//     //console.log( result.data)
//     setItems(result.data)
//     setIsLoading(false)

//   }
//   fetchItems()
// }, [])





  return (
<Router>
  <TopNav/>
  <Switch>
    <Route path='/challenge' component={Challenge} />
    <Route path='/' component={Home}/>
  </Switch>
</Router>
  );
}

export default App;
