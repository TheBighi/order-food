import './MealItem.css'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const MealItem = (props) => {
    const { addCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addCart(props.mealData)
    }

    return (
        <li className='meal-item'>
            <article >
                <img src={require(`../assets/${props.mealData.image}`)} alt={props.mealData.name}/>
                <div>
                    <h3>{props.mealData.name}</h3>
                    <p className='meal-item-price'>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.mealData.price)}</p>
                    <p className='meal-item-description'>{props.mealData.description}</p>
                </div>
                <p>
                    <Button className='meal-item-actions' onClick={handleAddToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem