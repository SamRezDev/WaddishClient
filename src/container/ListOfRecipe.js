import React,{useEffect,useState} from 'react'
import axios from "axios"
import "./ListOfRecipe.css"
import Recipe from "../components/Recipe.js"
export default function ListOfRecipe(props) {
    const [RecipeList, setRecipeList] = useState()
    const UserID = props.id

    useEffect(() => {
        axios.get("https://waddish-back.herokuapp.com/Recipe/"+UserID)
        .then(response => {
            setRecipeList(response.data)
          
        }).catch((error)=>{
           
        })
       
    }, [RecipeList])


    function DeleteElement(id){

        axios.delete("https://waddish-back.herokuapp.com/Recipe/"+id)
        .then(response => {
        })
      
            }

    return (
        <div>
            
            <div className="TableOfRecipe">
               {RecipeList? <div className="HeaderRecipe">
                    <div>TITLE</div>
                    <div>DESCRIPTION</div>
                    <div> FORGET DATE</div>
                </div> :".." } 
            {RecipeList ? 
            
            
            
            
            RecipeList.map( (element)=>
         {    return <Recipe Title={element.Title}
         Description={element.Description}
         ForgetUntilDate={element.ForgetUntilDate}
         ID={element._id}
         key = {element._id}
         DeleteFunction ={DeleteElement}
         / >

        } ) : "loading"}
                
            </div>


        </div>
    )
}
