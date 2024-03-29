import "./Login.css"
import React, {useState} from "react"
import { useAuth } from "../AuthContext";

const Login  = () => {
    let [formData, setFormData] = useState({email: "", password: ""})

    const onChange = (event)=>{
        switch (event.target.name ){
         case "email":
            // Validation part
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (event.target.value.match(validRegex)) {
                setFormData(data =>({...data, email: event.target.value}))
                console.log("Valid")

            }
            else{
                console.log("Please enter valid email")
            }
         break;
         case "password":

            // Validation part
            setFormData(data =>({...data, password: event.target.value}))
         break;

        }
    }
    const { login } = useAuth();

    const onSubmit = (e) => {
        alert(JSON.stringify(formData));
        e.preventDefault();
        login(formData.email, formData.password)
        
    }

    return <form className="popupContent" onSubmit={(e)=>{onSubmit(e)}}>
            <p>Login</p>
            <input type="email" placeholder="Email" name="email"  onChange={(e)=> {onChange(e)}}/>
            <input type="password" placeholder="Password" name="password" onChange={(e)=> {onChange(e)}}/>
            <button>Login</button>
        </form>
}


export default Login