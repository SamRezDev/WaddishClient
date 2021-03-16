import React,{useEffect,useState} from 'react'
import axios from "axios"
import "./ListOfRecipe.css"
import Recipe from "../components/Recipe.js"
export default function ListOfRecipe(props) {
    const [RecipeList, setRecipeList] = useState()
    const UserID = props.id

    useEffect(() => {
        axios.get("http://localhost:5000/Recipe/"+UserID)
        .then(response => {
            setRecipeList(response.data)
          
        }).catch((error)=>{
            console.log(error)
        })
       
    }, [RecipeList])


    function DeleteElement(id){

        axios.delete("http://localhost:5000/Recipe/"+id)
        .then(response => {console.log(response.data)
        })
        console.log("function delete called")
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
