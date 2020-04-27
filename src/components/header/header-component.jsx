import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase-utils'
// connect is a higher order component that lets us modify the component to have access to things related to redux
import {connect} from 'react-redux'
import './header-styles.scss';

const Header=({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' 
                    // next line is for user's signout
                    onClick={()=>auth.signOut()}>SIGN OUT </div>
                :
                // if user is not logged in we have a link to signin page
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

// mapStateToProps is just name we can call it anything
const mapStateToProps = state =>({
    // the user is in the root-reducer in combineReducers
    // the currentUser in the user-reducer
    currentUser:state.user.currentUser
})
// the first argument of connect is the function that allows us to access the state 
export default connect(mapStateToProps)(Header);
