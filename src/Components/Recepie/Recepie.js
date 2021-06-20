import classes from "./Recepie.module.css";
const { Link } = require("react-router-dom");
const Recepie = (props) => {
    return ( 
        
        <Link to={`/Recepies/${props.id}`}> 
            <div className={classes.Recepie}>
                <h3>{props.title}</h3>
                <img src={props.image} alt={props.title} />
            </div>
        </Link> 
     );
}
 
export default Recepie;