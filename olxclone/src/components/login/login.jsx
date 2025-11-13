import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import Logo from "../../assets/olx-logo.svg";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Firebase login
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
            onChange={(e) => setEmail(e.target.value)} // ✅ Controlled input
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
            onChange={(e) => setPassword(e.target.value)} // ✅ Controlled input
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
