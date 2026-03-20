import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartContext";
import Modal from "./components/UI/Modal";
import Button from './components/UI/Button'

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      <Header onOpenCart={openCart} />
      
      <Meals />

      <Modal open={cartIsOpen}>
        <h2>Test</h2>
        <Button onClick={closeCart}>Close</Button>
      </Modal>
    </CartProvider>
  );
}

export default App;