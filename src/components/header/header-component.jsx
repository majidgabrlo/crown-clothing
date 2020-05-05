import React from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase-utils'
// connect is a higher order component that lets us modify the component to have access to things related to redux
import {connect} from 'react-redux'
// we use createStructuredSelector in mapStateToProps function
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/cart-icon-camponent'
import CartDropDown from '../cart-dropdown/cart-dropdown-component'
import {selectCurrentUser} from '../../redux/users/users-selector'
import {selectHidden} from '../../redux/cart/cart-selector'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header-styles'
import './header-styles.scss';

// ((Redux TUT)) then pass the hidden here
const Header=({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    // we pass div instead of link in our styles
                    <OptionLink as='div' 
                    // next line is for user's signout
                    onClick={()=>auth.signOut()}>SIGN OUT 
                    </OptionLink>
                :
                // if user is not logged in we have a link to signin page
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            (hidden)? null : <CartDropDown/>
        }
    </HeaderContainer>
);
// ((Redux TUT)) then we add ****************************
// mapStateToProps is just name we can call it anything

// ***************************************************
// the way without using createStructuredSelector function
// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
//     // the user is in the root-reducer in combineReducers
//     // the currentUser in the user-reducer
//     currentUser,
//     hidden
// })
// **************************************************************************
const mapStateToProps= createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectHidden
})
// // the first argument of connect is the function that allows us to access the state 
export default connect(mapStateToProps)(Header);
