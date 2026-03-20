import './MealItem.css'

const MealItem = (props) => {
    console.log('PROPS ARE HERE ')
    
    return (
        <li className='meal-item'>
            <article >
                <img src={require(`../assets/${props.mealData.image}`)} alt={props.mealData.name}/>
                <div>
                    <h3>{props.mealData.name}</h3>
                    <p className='meal-item-price'>{props.mealData.price}</p>
                    <p className='meal-item-description'>{props.mealData.description}</p>
                </div>
                <p>
                    <button className='meal-item-actions'>Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem