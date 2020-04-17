import React from 'react';
import axios from 'axios';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import MainPage from '../src/pages/MainPage';
import UserPage from '../src/pages/UserPage';
import SignUpPage from '../src/pages/SignUpPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200201&end_date=20200416&q=covid%20coronavirus&sort=newest&api-key=dvUjz1rumQzMr9KIcUWGfkgRJsjSAi8y').then(res => {
  console.log(res.data.response.docs);

  
})



  return (
    <Router>
    <div>
      <Nav />
    <Switch>
          <Route path="/home">
            <MainPage />
          </Route>
          <Route path="/userpage">
            <UserPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
  </div>
</Router>

  )}

export default App;
