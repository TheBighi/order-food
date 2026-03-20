import './MealItem.css'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const MealItem = ({ mealData }) => {
    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        addItem(mealData);
    };

    return (
        <li className='meal-item'>
            <article>
                <img src={require(`../assets/${mealData.image}`)} alt={mealData.name}/>
                <div>
                    <h3>{mealData.name}</h3>
                    <p className='meal-item-price'>
                        {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(mealData.price)}
                    </p>
                    <p className='meal-item-description'>{mealData.description}</p>
                </div>
                <p>
                    <Button className='meal-item-actions' onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    );
};

export default MealItem