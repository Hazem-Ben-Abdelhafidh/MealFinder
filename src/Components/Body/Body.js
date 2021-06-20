import Search from "../Containers/Search/Search";
import Navigation from "../Navigation/Navigation"
import classes from "./Body.module.css";
const Body = () => {
    return ( 
        <main className={classes.Body}>
            <Navigation/>
            <Search/>
        

        </main>
     );
}
 
export default Body;