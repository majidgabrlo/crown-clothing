import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup-component'
import {auth} from './firebase/firebase-utils'

class App extends React.Component {

  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth =null

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* سوییج اولین مسیر پیدا شده را لود میکند و دیگر صورت وجود آدرس های پیدا شده مابقی را لود نمیکند */}
        <Switch>
          {/* دستور زیر برای روتینگ است  */}
          {/* "exact" shows that it have to be "/" to load HomePage */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
