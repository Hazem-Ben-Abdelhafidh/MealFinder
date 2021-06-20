import classes from "./RecepieDetails.module.css";
import { useEffect, useState } from "react";

const RecepieDetails = (match) => {
    const id = match.match.params.id;
    const [details,setDetails]= useState({});
    const  fetchDetails = async ()=> {
        const data= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response= await data.json();
        setDetails(response.meals[0]);
        console.log(response.meals[0]);
    }

    const ingredients= [];
    for (let i=1; i<=20;i++){
        if (details[`strIngredient${i}`]){
            ingredients.push(`${details[`strIngredient${i}`]} - ${details[`strMeasure${i}`]}`);
        }
        else{
            break;
        }
    }
    
    useEffect(fetchDetails,[]);
    return (  
        
        <div className={classes.RecepieDetails}>
            <h1>{details.strMeal}</h1>
            <img src={details.strMealThumb} alt={details.strMeal} />

            <div className={classes.Instructions}>
                <h3>Ingredients:</h3>
                <ul className={classes.Ingredients}>
                   {
                       ingredients.map((e,id)=>{
                           return (<li key={id}>{e}</li>);
                       })
                   }
                </ul>
                <h3>Instructions:</h3>
                <p>{details.strInstructions}</p>
            </div>
            <a href={details.strYoutube} target="_blank">Here is a youtube video to help you if you're stuck!</a>
        </div>
    );
}
 
export default RecepieDetails;