import React ,{useState,useEffect}from 'react'
import axios from "axios"
import "./ContainerRecipe.css"
export default function ContainerRecipe(props) {
    const [randomDish, setrandomDish] = useState("")
    const [randomValue, setrandomValue] = useState(0)
    const [Recipe, setRecipe] = useState()
    const [ForgottenDays, setForgottenDays] = useState(1)
    const [Fresh, setFresh] = useState(true)
    const [FreshDisplay, setFreshDisplay] = useState(false)
const UserID = props.id
    useEffect(() => {
        axios.get("https://waddish-back.herokuapp.com/Recipe/"+UserID)
        .then(response => {
            setRecipe(response.data)
          
        }).catch((error)=>{
            console.log(error)
        })
       
    }, [])

    useEffect(() => {
        let CurrentDate = new Date(Date.now())
        if (compareTime(randomDish.ForgetUntilDate,CurrentDate) ) {
            console.log("Try something else") 
            setFresh(false)
          
        } else {
            console.log("Quite fresh")
            setFresh(true)
          
        }

    }, [Fresh,randomDish.ForgetUntilDate])
    /*
    const Recipe =[
        {
            
            name: "Riz",
            description :"Classic riz",
            DateAdded : "",
            ForgetUntil : "",

        },
        {
            
            name: "3dess",
            description :"3dess is cool",
            DateAdded : "",
            ForgetUntil : "",
        },
        {
            
            name: "loubia",
            description :"loubia is fine ",
            DateAdded : "",
            ForgetUntil : "",
        },
    ]
*/


function compareTime(time1, time2) {
    return new Date(time1) >= new Date(time2); // true if time1 is later
}


    const newDish = () => {
       { setFreshDisplay(true)
if(Recipe){  let value =     Math.floor(Math.random() * Recipe.length)   
 while (randomValue === value ){
    value =     Math.floor(Math.random() * Recipe.length)  
}
setrandomValue(value)
        
setrandomDish(Recipe[randomValue]) 
console.log(Recipe[randomValue])
console.log(randomDish.ForgetUntilDate)



/* Recipe.filter(dish => dish.ForgetUntilDate < CurrentDate  ) */
console.log(randomDish.Title)
let today = new Date("02-09-2021");

} else { console.log("Recipe not loaded")}
}

    }
   
   const forgetDish =(e) =>{

    
   console.log(randomDish.ForgetUntilDate)
let d =new Date(randomDish.ForgetUntilDate) ;

console.log("BASEDATE IS " + d)
d.setDate(d.getDate() + ForgottenDays);
console.log(randomDish)
console.log("NEW DATE IS " + d)
const RecipeUpdated ={

    ForgetUntilDate : d

}
    axios.post("https://waddish-back.herokuapp.com/Recipe/update/"+randomDish._id, RecipeUpdated)
    .then(res => console.log(res.data)).catch(error => console.log(error))

    }

   

    return (
        <div style={{marginTop: "50px"}}>
            {   

                
<div className="ContainerRecipe" style={  Fresh ? {backgroundColor: "green" , color :"white"}: {backgroundColor: "red" , color :"black"} }>
  <div className="TitleRecipe">{randomDish.Title}</div>
  <div className="Description">{randomDish.Description}</div>
  <div className="Waddishornot" style= {FreshDisplay? {display: "block"} : {display: "none"}}> {Fresh ?" GO AHEAD" : "you should try something else m8" } </div>
  </div>
            }
         <button className="ReCheck" onClick={newDish}>WADDISH ?</button>  
         <div className="ForgetCont">
         <button className="Forget" onClick={forgetDish}>Forget about this for..</button>  
         <div className="ForgetDays">
         <button style={ForgottenDays ===1 ? {color:"red"} :{color:"white"} } onClick={() => setForgottenDays(1)}>1 day </button>
         <button style={ForgottenDays ===3 ? {color:"red"} :{color:"white"} } onClick={() => setForgottenDays(3)}>3 days </button>
         <button style={ForgottenDays ===5 ? {color:"red"} :{color:"white"} } onClick={() => setForgottenDays(5)}>5 days </button>
         </div>
            
         </div>
        
        </div>
    )
}
