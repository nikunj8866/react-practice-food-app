const CartItem = props => {
    const item = props.item;
    const minusQty = () => {
        if(item.qty > 1){
            item.qty = item.qty - 1;
        }
        props.updateCart(item);
    }
    const addQty = () => {
        item.qty = parseInt(item.qty) + 1;
        props.updateCart(item);
    }

    const removeItem = () => {
        props.removeItem(item.id);
    }

    return(
        <li> 
            <h4>{item.name} <span onClick={removeItem} style={ {float: "right"} }>Remove</span></h4>
            <span>{`$${item.price}`} <span onClick={minusQty} style={ {marginLeft: "20px"} }> - </span>{item.qty} <span onClick={addQty}> + </span></span>
            <span style={ {float: "right"}}>{`$${(item.price * item.qty).toFixed(2)}`}</span>
        </li>
    )
}

export default CartItem;