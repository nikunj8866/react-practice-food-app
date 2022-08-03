import { useContext } from 'react';
import classes from './Cart.module.css';
import CartModal from '../UI/CartModal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    
    const ctx = useContext(CartContext);
    const cartItems = ctx.items;
    const isShowOrderButton = ctx.items.length > 0;
    const updateCartItem = (item) => {
        ctx.updateItem(item)
    }
    const removeItem = ( id ) => {
        ctx.removeItem( id );
    }
    return(
        <CartModal hideCart={props.onHideCart}>
            <ul className={classes['cart-items']}>
            {cartItems.map( (item) => (
                <CartItem key={item.id} item={item} updateCart={updateCartItem} removeItem={removeItem}/>
            ))}
            </ul>
            {isShowOrderButton && 
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ `$${ctx.totalAmount.toFixed(2)}` }</span>
            </div>
            }
            { !isShowOrderButton && <p style={ {textAlign: 'center'}}>Your cart is empty.</p>}
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {isShowOrderButton && <button className={classes.button}>Order</button>}
            </div>
        </CartModal>
    )
}
export default Cart;