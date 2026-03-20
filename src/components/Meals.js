import { useEffect, useState } from "react"
import MealItem from './MealItem'

const Meals = () => {
    const [meals, setMeals] = useState([])

    let mealContent = <p>No meals found</p>

    useEffect(() => {
        fetch('https://curly-guacamole-x5x69vgg9gxhvvgw-3001.app.github.dev/meals').then(res => res.json()).then(data => setMeals(data))
    }, [])

    mealContent = meals.map((meal) => (
        <MealItem mealData={meal}/>
    ))


    return (
        <>
        <h2>create list of meals, using fetch data from backend</h2>
        <ul id="meals">
            { 
                mealContent
            }
        </ul>
        </>
    )
}

export default Meals