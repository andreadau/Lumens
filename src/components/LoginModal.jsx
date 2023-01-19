import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import '../assets/styles/LoginModal.scss'

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const api = axios.create({
    baseURL: "http://localhost:3011",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailRegex.test(email) || email.trim() === "") {
      setError("Invalid email address");
      return;
    }
    if (password.trim() === "") {
      setError("Password is required");
      return;
    }
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      if (response.status === 200) {
        // If the credentials are valid, close the modal and authenticate the user
        // Store the JWT token in the local storage for future use
        localStorage.setItem("token", response.data.token);
        console.log("User authenticated successfully");
        // Redirect the user to the homepage after authentication
        window.location.href = "/";
      }
    } catch (error) {
      // handle errors if any, display an error message
      setError(error.response.data.error);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop" onClick={() => props.onClose()} />
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h1 className="modal-title" >Login</h1>
          <div id="modal-close" onClick={() => props.onClose()}><FontAwesomeIcon icon={faTimes} />
          </div>
          <label>
            <input
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error && <div className="error-message">{error}</div>}
          <a href="/login" >Forgot your password ?</a>
          <button className="btn-black" type="submit" value="Submit">Login</button>
        </form>
        <a href="#" onClick={() => props.showSignup()}>Don't have an account? Sign up</a>
      </div>
    </div>
  );
}

export default LoginModal;
