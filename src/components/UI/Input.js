import React from 'react';
import classes from './Input.module.css';

const Input = (  props ) => {

    const onChangeHandler = (event) => {
        props.getValue(event.target.value);
    }
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} onChange={onChangeHandler} />
        </div>
    )
}

export default Input;