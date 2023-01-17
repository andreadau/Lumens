import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import '../assets/styles/LoginModal.scss'

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = axios.create({
    baseURL: "http://localhost:3011",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      if (response.status === 200) {
        // If the credentials are valid, close the modal and authenticate the user
        // You can store the JWT token in the local storage for future use
        localStorage.setItem("token", response.data.token);
        console.log("User authenticated successfully");
        // You can also redirect the user to the homepage or wherever you want
        window.location.href = "/";
      }
    } catch (error) {
      // handle errors if any, for example, display an error message
      console.log(error);
    }
  };



  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h1 className="modal-title" >Login</h1>
          <div id="modal-close" onClick={onClose}><FontAwesomeIcon icon={faTimes} />
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
          <a href="/login" >Forgot your password ?</a>
          <button className="btn-black" type="submit" value="Submit">Login</button>
        </form>
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
}

export default LoginModal;
