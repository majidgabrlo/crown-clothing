import React from 'react'
import CustomButton from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item-component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selector'
import './cart-dropdown-styles.scss'

const CartDropDown = ({cartItem}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItem.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps= state =>({
    cartItem : selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown);