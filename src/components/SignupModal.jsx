import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import '../assets/styles/LoginModal.scss'

// write a singup modal component
const SignupModal = ({ onClose }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const api = axios.create({
    baseURL: "http://localhost:3011",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailRegex.test(email) || email.trim() === "") {
      setError("Invalid email address");
      return;
    }
    if (!passwordRegex.test(password) || password.trim() === "") {
      setError("Password should be at least 8 characters with one uppercase letter, one number and one special character (@$!%*#?&) ");
      return;
    }
    try {
      const response = await api.post("/signup", {
        email,
        password
      });
      if (response.status === 200) {
        // If the credentials are valid, close the modal and authenticate the user
        // You can store the JWT token in the local storage for future use
        sessionStorage.setItem("token", response.data.token);
        console.log("User registered successfully");
        // You can also redirect the user to the homepage or wherever you want
        window.location.href = "/";
      }
    } catch (error) {
      // handle errors if any, for example, display an error message
      setError(error.response.data.error);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h1 className="modal-title" >Sign up</h1>
          <div id="modal-close" onClick={onClose}><FontAwesomeIcon icon={faTimes} />
          </div>
          <label>
            <input
              noValidate
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <input
              noValidate
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error && <div className="error-message">{error}</div>}
          <button className="btn-black" type="submit">Sign Up</button>
          <a href="/login">Already have an account? Login</a>
        </form>
      </div>
    </div>
  );
};



export default SignupModal;
