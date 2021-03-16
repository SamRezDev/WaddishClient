import React from 'react'
import "./Login.css"
export default function Login() {
    function LoginUser(e){
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)

    }
    return (
        <div className="LoginPage">
            <form onSubmit={LoginUser} className="LoginForm"> <div className="PromptEmail"> LOGIN via e-mail</div>
                <input type="text" name="email" placeholder="EMAIL HERE"/>
                <input type="password" name="password" placeholder="PASSWORD HERE"/>
                <button type="submit"> OK</button>
            </form>
        </div>
    )
}
