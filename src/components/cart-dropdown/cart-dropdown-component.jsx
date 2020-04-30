import React from 'react'
import CustomButton from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item-component'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
// for routing we use withRouter function
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/cart/cart-selector'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import './cart-dropdown-styles.scss'

// we earn history after added withRouter higher order function
// dispatch exists in connect if we don't add second parameter 
const CartDropDown = ({cartItem, history,dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItem.length ?(
                cartItem.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ):(
                <span className='empty-message'>Your cart is empty</span>
            )
        }
            
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT
        </CustomButton>
    </div>
)
const mapStateToProps= createStructuredSelector({
    cartItem:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));