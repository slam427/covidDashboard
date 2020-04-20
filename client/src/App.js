import React from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import MainPage from '../src/pages/MainPage';
import UserPage from '../src/pages/UserPage';
import SignUpPage from '../src/pages/SignUpPage';
import MyPage from '../src/pages/MyPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

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
          <Route path= "/mypage">
            <MyPage />
          </Route>
        </Switch>
        <Footer />
  </div>
</Router>

  )}

export default App;
