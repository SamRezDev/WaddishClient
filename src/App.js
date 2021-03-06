
import './App.css';
import { Route, Switch,NavLink, Link,useHistory } from "react-router-dom";

import NewRecipe from "./container/NewRecipe.js"
import ListOfRecipe from "./container/ListOfRecipe.js"
import Login from "./container/Login.js"
import About from "./container/About.js"
import ContainerRecipe from "./components/ContainerRecipe"
import NavBar from "./components/NavBar"
import {useState} from "react"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import dotenv from "dotenv"
dotenv.config()

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  })
} else {
  firebase.app(); // if already initialized, use that one
}
const auth=firebase.auth();
const firestore = firebase.firestore();
const provider= new firebase.auth.GoogleAuthProvider();

function App() {
  

  const [user] = useAuthState(auth)

  const [idUser, setidUser] = useState("")

  const history = useHistory();

 const signInWithGoogle = () => {
    
    auth.signInWithPopup(provider).then(function(result) {
     
      setidUser(auth.currentUser.uid)
  
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
     
    
    
      var errorMessage = error.message;
      console.log(errorMessage);
    
    });

  }
function SignOff(){
  auth.signOut()
  setidUser()
  history.push("/About")
}

  return (
    <div className="App">
      {idUser? <> 
  <NavBar />
  <Switch>
 <Route  path={["/Login"]} >
 <Login/>
 </Route>
 <Route  path={["/About"]} >
 <About/>
 </Route>
 <Route exact path={["/Home","/"]} default >
 <ContainerRecipe id={idUser}/>
 </Route>
 <Route path ="/New">
   <NewRecipe id={idUser}/>
 </Route>
 <Route path ="/List">
   <ListOfRecipe id={idUser}/>
 </Route>


 </Switch>
 <div className="AccountSection">
 <div className="LoggedInAs"> Logged in as : <br/>
     {auth.currentUser.displayName} <img src={auth.currentUser.photoURL} alt=""/></div>
 <button className="SignOffButton" onClick={()=> SignOff()}>  SIGN OFF </button>

 </div>
   </>
  : <div className="LoginSection">
     
    <div className="OrClass">  Welcome to WADDISH!<br/>
    Start by signing in through google </div> 
  

    <button className="SignInButton" onClick={signInWithGoogle}>  LOGIN WITH GOOGLE</button>
    <About/>  
 </div>  }



    </div>
  );
}

export default App;
