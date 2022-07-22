import { useState, useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
//import CartProvider from '../../../store/cart-provider';
import CartContext from '../../../store/cart-context';

const MealItemForm = ( props ) => {
    const [quantity, setQuantity] = useState(1);
    const ctx = useContext( CartContext );
    const setQtyHandler = (qty) => {
        setQuantity(qty);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        ctx.addItem({id: props.item.props.id, name: props.item.props.name,price: props.item.props.price, qty: quantity})
    }
    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <Input label="Qty" input={ {type: "number", id: "qty", name: "qty", min: 1, max: 5, defaultValue: 1} } getValue={setQtyHandler} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;