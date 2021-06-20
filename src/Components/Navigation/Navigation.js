import classes from "./Navigation.module.css";


const { Link } = require("react-router-dom")

const Navigation = () => {
    return ( 
        <div className={classes.Navigation}>
            <nav className={classes.Nav}>
                <h2 className={classes.header}>Meal Finder</h2>
                <ul className={classes.Links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About us</Link></li>
                    <li><Link to="">Contact us</Link></li>
                </ul>
            </nav>
         </div> );
}
 
export default Navigation;