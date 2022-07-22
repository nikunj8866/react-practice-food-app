import React from "react";
import MealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Food App</h1>
                <HeaderCartButton showCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImg} alt="A table full of delicious food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;