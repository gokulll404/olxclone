import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import Logo from "../../assets/olx-logo.svg";
import "./Login.css";
import { AuthContext } from "../../store/firebasecontext";


function Login() {

  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
     setUser(email );
    try {
      
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link style={{ textDecoration: "none" }} to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Login;
