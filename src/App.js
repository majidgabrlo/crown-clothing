import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component';


const HatsPage=()=>(
  <h1>Hats!</h1>
)
function App() {
  return (
    <div>
      {/* سوییج اولین مسیر پیدا شده را لود میکند و دیگر صورت وجود آدرس های پیدا شده مابقی را لود نمیکند */}
      <Switch>
        {/* دستور زیر برای روتینگ است  */}
        {/* "exact" shows that it have to be "/" to load HomePage */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
