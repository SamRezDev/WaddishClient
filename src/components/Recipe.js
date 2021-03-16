import React,{useEffect,useState} from 'react'
import "./Recipe.css"
export default function Recipe(props) {
    
    
    let DARTE = new Date(props.ForgetUntilDate);

   
    return (
        <div className="RecipeLine">
           <div className="NameOfRecipe">{props.Title}</div> 
          <div className="DescriptionOfRecipe">{props.Description}</div>
            <div className="Fresh">{DARTE.toString()}</div>  
            <button className="Delete" onClick={()=> props.DeleteFunction(props.ID)}>DELETE</button>
        </div>
    )
}
