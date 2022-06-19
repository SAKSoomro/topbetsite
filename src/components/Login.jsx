import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "../firebase-config";
import { Alert } from "bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/")
      });
    } catch (error) {
      navigate('/error')
       
     
    }
  };

//   onAuthStateChanged(firebaseAuth, (currentUser) => {
//     if (currentUser) navigate("/register")
//   });

  return (
    <section className="section-container">
    <div className="form">
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="bottom">
          <button onClick={handleLogin}>Login</button>
          <span>
            Not a member ? <Link to="/register">Sign up</Link>
          </span>
        </div>
        </div>
    </section>
  );
}