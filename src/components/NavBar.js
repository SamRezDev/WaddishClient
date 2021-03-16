  
import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
 /* <li>
{" "}
<NavLink to="/Home">
<button className="SignOffButton" onClick={props.SignOff}>  SIGN OFF </button>
</NavLink> 
</li> */
export default function NavBar(props) {
  const [ActiveNav, setActiveNav] = useState("")
  return (
    <div className="NavBar">
      <div className="Title">
      <NavLink onClick={() =>  setActiveNav("HOME") } 
      style={(ActiveNav==="HOME")?{ "color":"white" }: {"color":"#ff005c"}}
      to="/Home">
          {" "}
          <h2> HOME </h2>{" "}
        </NavLink>{" "}
  
     
      
      </div>
      <ul>

        
        <li>
          {" "}
          <NavLink  onClick={() =>  setActiveNav("NEW")}  
           style={(ActiveNav==="NEW")?{ "color":"white" }: {"color":"#ff005c"}} to="/New">
          <h2 >ADD  RECIPE </h2>
          </NavLink>
        </li>

        <li>
          {" "}
          <NavLink  onClick={() =>  setActiveNav("ALLRECIPE")}  
          style={(ActiveNav==="ALLRECIPE")?{ "color":"white" }: {"color":"#ff005c"}} to="/List">
          <h2 > CHECK RECIPE LIST </h2>
          </NavLink>
        </li>
    
      
      </ul>
    </div>
  );
}