import React from 'react'
// ((Redux TUT)) then we add these two
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
// ((Redux TUT)) then we write mapDispatchToProps function(in buttom of page)

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'

import './cart-icon-styles.scss'

const CartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);


const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
// ((Redux TUT)) after we write connect like this((null is our default value))
export default connect(null,mapDispatchToProps)(CartIcon);
// ((Redux TUT)) after this we have access to pass toggleCartHidden to our CartIcon function
// ((Redux TUT)) continue redux in root-reducer