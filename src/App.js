
import { BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css';
import Body from "./Components/Body/Body";
import RecepieDetails from "./Components/RecepieDetails/RecepieDetails";
import Recepies from "./Components/Recepies/Recepies";
import { MealProvider } from "./MealContext";



function App() {

  return (
    <BrowserRouter>
    <MealProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route exact path="/Recepies" component={Recepies}/>
          <Route path="/Recepies/:id" component={RecepieDetails}/>
        </Switch>
      </div>
    </MealProvider>
    

    
    </BrowserRouter>
  );
}

export default App;
