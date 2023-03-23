import {signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import { useState } from "react";
import {auth}  from "../Components/firebase";

import "./Styles/EmpLogin.css";
import { getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom"


function EmpLogin() {
  const [passtest, setPassTest] = useState(false);
  const [authTest, setAuthTest] = useState(false);
  const [autho,setAutho]=useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,seterror]=useState("")


  const handleLogin = async (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>  {
        console.log(userCredential)
        navigate("/Home")

      })
      .catch((error) =>{
        console.log(error);
      });
    }
    const forgotPassword = (email) =>{
      return  sendPasswordResetEmail(auth,email);
      console.log("send successfully");
    }


return (
    <>
   
      <div className="title">Employee Login</div>
      <form className="container" onSubmit={handleLogin}>
      
     
          <input
              name="email" type="text" className="input"  
               placeholder="Enter email" 
               onChange={(e)=>setEmail(e.target.value)} 
      
                required
               />
          <br />
          <br />



          {passtest === false && authTest === false ? (
            <div className="login-btns">
              <button
                type="password"
                className="btn"
                onClick={() => {
                  setPassTest(true);
                }}
              >
                Password
              </button>
              <button
                type="Auth"
                className="btn"
                onClick={() => {
                  setAuthTest(true);
                }}
              >
                AuthCode
              </button>
            </div>
          ) : passtest === true ? (
            <div className="password_section" id="password_section">
              <input
                className="input"
                id="inp"
                name="password"
                type="password"
                onChange={(e) =>setPassword(e.target.value)}
    
                required />
              <a href="/" id="link" onClick={forgotPassword}>
                Forget Password!
              </a>
              <br />
              <br />
              <a
                href="/"
                id="link"
                onClick={() => {
                  setPassTest(false);
                }}
              >
                Other login method
              </a>
              <br />
              <br />

              <button  type="submit"  className="btn" id="lgbtn">
                Login
              </button>
            </div>
          ) : (
            <div className="password__section">
              <input
                id="inp"
                className="input"
                type="password"
                value={autho}
                onChange={(event) => {
                  setAutho(event.target.value);
                }}
              />
              <a href="/" id="link">
                Forget AuthCode!
              </a>
              <br />
              <br />
              <a
                href="/"
                id="link"
                onClick={() => {
                  setAuthTest(false);
                }}
              >
                Other login methods
              </a>
              <br />
              <br />

              <button  type="submit" className="btn"  id="lgbtn">
                Login
              </button>
            </div>
          )}
      </form>
      
   
      {error && <div>{error}</div>}
    </>
);
              }
  


export default EmpLogin;
