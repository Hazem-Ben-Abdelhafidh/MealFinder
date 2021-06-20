import { useState,createContext } from "react";




export const MealContext = createContext();



export const MealProvider=(props)=> {
    const [input, setInput] = useState('');
    return (
        <MealContext.Provider  value={[input,setInput]} >
            {props.children}
        </MealContext.Provider>
    );
}