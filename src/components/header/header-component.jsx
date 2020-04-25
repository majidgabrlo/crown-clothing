import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase-utils'
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
export default Header;
