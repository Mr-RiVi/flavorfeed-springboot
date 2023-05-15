import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";

import "../../assets/styles/login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const usernameRef = useRef();
  const errorRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");

  //When the user submits the form, the handleSubmit function sends the username and password to the server for authentication using the login function from a separate auth.js file.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await axios.post(username, password);
    if (success) {
      setRedirectToReferrer(true); //If the login is successful, the redirectToReferrer variable is set to true,*(1)
    } else {
      //If the login is unsuccessful, an error message is displayed to the user.
      alert("Invalid username or password");
    }
  };

  //*(1),which causes the Redirect component to redirect the user to the home page.
  if (redirectToReferrer) {
    return <Navigate to="/" />;
  }

  return (
    <section className="login-section">
      <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>
        {errorMsg}
      </p>
      <h1 className="page-heading">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"
          required
        />

        <lable htmlFor="password">Password:</lable>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button>Sign In</button>
    <section className="login-section">
      <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>
        {errorMsg}
      </p>
      <h1 className="page-heading">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"
          required
        />

        <lable htmlFor="password">Password:</lable>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button>Sign In</button>
      </form>
    </section>
  );
}

export default Login;
