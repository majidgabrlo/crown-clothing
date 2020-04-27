import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup-component'
import {auth} from './firebase/firebase-utils'
import {createUserProfileDocument} from './firebase/firebase-utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/users/user-actions'

class App extends React.Component {

  unSubscribeFromAuth =null

  componentDidMount(){
    const { setCurrentUser }=this.props
    // onAuthStateChanged is a method to understand if user situation changed {signed out or signed in} and the parameter that it takes is its situation
    // tip: Firebase keeps us logged in until we sign out (if we close browser and go to site again we're logged in)
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth)
        // onSnapshot sends us the data from our database
        userRef.onSnapshot(snapShot=>{

          // this.props.setCurrentUser is instead of this.setState ************ Redux
          setCurrentUser({
              // the following line is id of doc
              id:snapShot.id,
              // the following line is the data that we have in our doc((its id is on previous line))
              ...snapShot.data()
            })
          })
        }
      // if we couldn't sign in 
      else{
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    // for prevent memory leak
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        {/* currentuser is for us to say to header that user is logged in or not */}
        <Header />
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

const mapDispatchToProps = dispatch => ({
  // dispatch is a function that whatever we pass in is an action that it gonna pass every reducer 
  setCurrentUser: user => dispatch( setCurrentUser(user) )
})
// null in connect is because App component doesn't set any value to State
export default connect(null, mapDispatchToProps)(App);
