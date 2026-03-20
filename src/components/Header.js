import logo from '../assets/logo.jpg'
import './Header.css'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = (props) => {
    const { items } = useContext(CartContext);

    const totalCartItems = items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    console.log(useContext(CartContext))
    
    return (
        <>
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={props.onOpenCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
        </>
    )
}

export default Header