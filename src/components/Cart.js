import ReactDOM from 'react-dom';
import Modal from './UI/Modal';
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Cart = ({ open, onClose }) => {
    const cartMeals = useContext(CartContext)

    let total = 0
    let meals = []

    for (let meal of cartMeals.items) {
        meals.push(<p key={meal.id} className='cart-item'>{meal.name} - {meal.quantity}</p>)
        total += meal.quantity * meal.price
    }


    const { checkOut } = useContext(CartContext);

    const handleCheckout = () => {
        checkOut();
    };

  return ReactDOM.createPortal(
    <Modal open={open} onClose={onClose}>
      <h2>Your Cart</h2>
      {meals}
    <div className='cart-total'>
        <p>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(total)}</p>
    </div>
    <div className="modal-actions">
        <Button textOnly={true} type="button" onClick={onClose}>Close</Button>
        <Button type="button" onClick={handleCheckout}>Checkout</Button>
    </div>
    </Modal>,
    document.getElementById('modal')
  );
};

export default Cart;