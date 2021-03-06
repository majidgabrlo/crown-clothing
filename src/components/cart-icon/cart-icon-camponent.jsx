import React from 'react'
// ((Redux TUT)) then we add these two
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selector'
// ((Redux TUT)) then we write mapDispatchToProps function(in buttom of page)

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import { createStructuredSelector } from 'reselect'
import './cart-icon-styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
// ((Redux TUT)) after we write connect like this((null is our default value))
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
// ((Redux TUT)) after this we have access to pass toggleCartHidden to our CartIcon function
// ((Redux TUT)) continue redux in root-reducer