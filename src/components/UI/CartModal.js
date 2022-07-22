import React from 'react';
import ReactDom from 'react-dom';
import classes from './CartModal.module.css';

const Backdrop = ( props ) => {

    return <div className={classes.backdrop} onClick={props.hideCart}/>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement =  document.getElementById('overlays');

const CartModal = (props) =>  {
    
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop hideCart={props.hideCart} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
       </React.Fragment>
    )
}
export default CartModal;