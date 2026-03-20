import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartContext";
import Cart from "./components/Cart"; // ← use Cart, not Modal directly

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <CartProvider>
      <Header onOpenCart={() => setCartIsOpen(true)} />
      <Meals />
      <Cart open={cartIsOpen} onClose={() => setCartIsOpen(false)} />
    </CartProvider>
  );
}

export default App;