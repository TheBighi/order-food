import { useEffect, useState } from "react"

const Meals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('https://curly-guacamole-x5x69vgg9gxhvvgw-3001.app.github.dev/meals').then(res => res.json()).then(data => setMeals(data))
    }, [])


    console.log(meals)
    return (
        <>
        <h2>create list of meals, using fetch data from backend</h2>
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
        </>
    )
}

export default Meals