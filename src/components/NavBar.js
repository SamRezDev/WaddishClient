  
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
  const [ActiveNav, setActiveNav] = useState("HOME")
  return (
    <div className="NavBar">
      <div className="Title">
      <NavLink onClick={() =>  setActiveNav("HOME") } 
      style={(ActiveNav==="HOME")?{"color":"#ff005c"}:{ "color":"black" } }
      to="/Home">
          {" "}
          <a> HOME </a>{" "}
        </NavLink>{" "}
  
     
      
      </div>
      <ul>

        
        <li>
          {" "}
          <NavLink  onClick={() =>  setActiveNav("NEW")}  
           style={(ActiveNav==="NEW")?{"color":"#ff005c"}:{ "color":"black" } } to="/New">
          <a >ADD  RECIPE </a>
          </NavLink>
        </li>

        <li>
          {" "}
          <NavLink  onClick={() =>  setActiveNav("ALLRECIPE")}  
          style={(ActiveNav==="ALLRECIPE")?{"color":"#ff005c"}:{ "color":"black" } } to="/List">
          <a > CHECK RECIPE LIST </a>
          </NavLink>
        </li>
    
        <li>
          {" "}
          <NavLink  onClick={() =>  setActiveNav("ABOUT")}  
           style={(ActiveNav==="ABOUT")?{"color":"#ff005c"}:{ "color":"black" } } to="/About">
          <a >ABOUT WADDISH </a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}