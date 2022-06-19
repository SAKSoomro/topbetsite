import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import { firebaseAuth } from "../firebase-config";
  export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
      }
    };
  
    // onAuthStateChanged(firebaseAuth, (currentUser) => {
    //   if (currentUser) navigate("/");
    // });
  
    return (

      <section className="section-container">
        <div className="form">
          <h1>Signup</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
          className="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <div className="bottom">
          <h3>Password must be 6 charracters long</h3>
            <button onClick={handleSignIn}>Singup</button>
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
          </div>
      </section>
     );
  }