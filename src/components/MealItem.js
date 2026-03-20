import './MealItem.css'
import Button from './UI/Button'

const MealItem = (props) => {
    console.log('PROPS ARE HERE ')
    
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
                    <Button className='meal-item-actions'>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem