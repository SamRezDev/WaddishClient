import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./NewRecipe.css"
export default function NewRecipe(props) {
const [Title, setTitle] = useState()
const [Description, setDescription] = useState()
const [RecipeAdded, setRecipeAdded] = useState(false)
const UserID = props.id;

    function AddRecipe(e){
        e.preventDefault()
        let CurrentTime = Date(Date.now()).toString(); 

        console.log(Title + Description + CurrentTime)
        const Recipe = {
            Title : Title,
            Description : Description,
            AddedAtDate : CurrentTime,
            UserID:  UserID
        }

    axios.post("https://waddish-back.herokuapp.com/Recipe/add/"+UserID, Recipe)
    .then(
       function() {setRecipeAdded(true)
        setTimeout(() =>  {
            setRecipeAdded(false)
    },3000) } ).catch(error => console.log(error))
   
    }

    
    return (
        <div>
            <form className="NewRecipeContainer" onSubmit={AddRecipe}>
  <input type="text" placeholder="Title" className="RecipeTitle" onChange={(e)=>setTitle(e.target.value)}/>
 <textarea type="text"  placeholder="Description" className="RecipeDescription" onChange={(e)=>setDescription(e.target.value)}/> 
        <button type="submit" >OK</button>
        {RecipeAdded? <h1 style={{"alignText":"center"}} >RECIPE ADDED!</h1> : ""}
            </form>
        </div>
    )
}
