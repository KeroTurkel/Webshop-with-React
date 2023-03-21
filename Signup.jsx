import React, {useState} from "react";
import "../pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpsw, setConfirmpsw] = useState("");



    const handleSubmit = async (event) => {
        
        event.preventDefault();

        if(confirmpsw !== password){
            alert("Password is not matching");
            return;
        }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
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

                            <div className="input-container">
                                <label>Confirm Password </label>
                                <input 
                                    type="password"
                                    value={confirmpsw}
                                    onChange={(event)=> setConfirmpsw(event.target.value)}
                                />
                            </div>

                            <Link className="link-signup" to="/login" >Login</Link>

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

export default Signup;