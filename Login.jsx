import React, {useState} from "react";
import "../pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) => {
        
        event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/credit")
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });
    };

    return(
        <div class="content3">
            <div className="background-img">
                <div class="content-inner3">
                    <div className="userForm">

                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Email </label>
                                <input 
                                    type="email" 
                                    placeholder="email@gmail.com"
                                    value={email}
                                    onChange={(event)=> setEmail(event.target.value)}
                                />
                                
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input 
                                    type="password"
                                    value={password}
                                    onChange={(event)=> setPassword(event.target.value)}
                                />
                            </div>

                            <Link className="link-signup" to="/signup" >Sign up</Link>

                            <div className="button-container">
                                <button type="submit" className="btn-login" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Login;