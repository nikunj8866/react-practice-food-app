import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.ACTION === "ADD")
    {
        var ItemExist = state.items.filter(it => it.id === action.item.id);
        if(ItemExist.length >0) {
            var index = state.items.findIndex(it => it.id === action.item.id);
            state.items[index].qty = parseInt(state.items[index].qty) + parseInt(action.item.qty);
        }
        else {
            state.items = [...state.items, action.item];
        }
        var TotalAmount = 0;
        state.items.forEach( (item) => {
            TotalAmount += (item.price * item.qty) 
        });

        return {
            items: state.items,
            totalAmount: TotalAmount
        }
    }
    if(action.ACTION === "UPDATE") {
        var ItemExistUpdate = state.items.filter(it => it.id === action.item.id);
        if(ItemExistUpdate.length >0) {
            var indexUpdate = state.items.findIndex(it => it.id === action.item.id);
            state.items[indexUpdate].qty = action.item.qty;
        }
        var TotalAmountUpdate = 0;
        state.items.forEach( (item) => {
            TotalAmountUpdate += (item.price * item.qty) 
        });

        return {
            items: state.items,
            totalAmount: TotalAmountUpdate
        }
    }
    if(action.ACTION === "REMOVE")
    {
        state.items = state.items.filter(it => it.id !== action.id);
        var TotalAmountRemoveUpdate = 0;
        state.items.forEach( (item) => {
            TotalAmountRemoveUpdate += (item.price * item.qty) 
        });

        return {
            items: state.items,
            totalAmount: TotalAmountRemoveUpdate
        }
        
    }
    return defaultCartState;
}

const CartProvider = ( props ) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    //const ctx = useContext(CartContext);
    const addItemHandler = ( item ) => {  
        // var ItemExist = ctx.items.filter(it => it.id === item.id);
        // if(ItemExist.length >0) {
        //     var index = ctx.items.findIndex(it => it.id === item.id);
        //     ctx.items[index].qty = parseInt(ctx.items[index].qty) + parseInt(item.qty);
        // }
        // else {
        //     ctx.items = [...ctx.items, item];
        // }
        dispatchCartAction({ACTION: "ADD", item: item})
    }

    const removeCartItem = ( id ) => {
        dispatchCartAction({ACTION: "REMOVE", id: id})
    }

    const updateCartItem = ( item ) => {
        dispatchCartAction({ACTION: "UPDATE", item: item})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeCartItem,
        updateItem: updateCartItem
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;