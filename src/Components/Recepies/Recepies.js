import { useContext, useEffect, useState } from "react";
import { MealContext } from "../../MealContext";
import Recepie from "../Recepie/Recepie";
import classes from "./Recepies.module.css";

const Recepies = () => {


    const [input, setInput] = useContext(MealContext);
    const [recepies,setRecepies]= useState([]);

    const getRecepeies= async ()=>{
        try {

        
            const response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
            const data= await response.json();
            setRecepies(data["meals"]);
        }
        catch(e){
            console.log('check your internet connexion');
        }
        
      
    }

    useEffect(getRecepeies,[]);


    let recepiesComponent=[];
   try{ 
    recepiesComponent= recepies.map(recepie => {
        return (<Recepie title={recepie.strMeal} image={recepie.strMealThumb} key={recepie.idMeal} id={recepie.idMeal}/>);
    })}
    catch (e){
        recepiesComponent=(<div >Error!! You must Write something valid</div>);
    }
    


    return ( 
        <div className={classes.Recepies_container}>
             <h1 className={classes.header}>Results for {input}: </h1>
             <div className={classes.Recepies}>
            
            {input !== '' ? recepiesComponent
            : <div >You need to search for something!! </div>}
        </div>
        
        </div>
       
     );
}
 
export default Recepies;