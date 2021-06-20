import { useContext } from "react";
import { useHistory } from "react-router";
import { MealContext } from "../../../MealContext";
import classes from "./Search.module.css";
const Search = () => {
    const history= useHistory(); 
    const [input, setInput] = useContext(MealContext);
    
    const fetchMeals=  (e)=>{
        e.preventDefault();
        history.push("/Recepies");
        
       
    }

    return ( 
        <div className={classes.Search}>
            <h1 className={classes.header}>Search for A meal!</h1>
            <form onSubmit={fetchMeals}>
                <input className={classes.Search_input} type="text" placeholder="Search..."  value={input} onChange={e=>{setInput(e.target.value)}} required/>
                <button className={classes.Search_button} type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
     );
}
 
export default Search;