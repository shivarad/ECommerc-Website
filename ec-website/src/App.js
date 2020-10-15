import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/Header';
import SingInUp from './pages/sign-In-up/sign-in-up';


function App() {
  return (
    <div >
       <Header/>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SingInUp} />

      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
