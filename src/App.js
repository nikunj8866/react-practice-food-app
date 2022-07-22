import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {
  const [cartIsShows, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
        { cartIsShows && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
