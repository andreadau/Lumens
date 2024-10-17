import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import '../assets/styles/LoginModal.scss';

const AuthModal = ({ onClose, userType, permissions }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true); // Track whether to show login or signup

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
        if (isLoginMode) {
            if (password.trim() === "") {
                setError("Password is required");
                return;
            }
        } else {
            if (!passwordRegex.test(password) || password.trim() === "") {
                setError("Password should be at least 8 characters with one uppercase letter, one number, and one special character (@$!%*#?&)");
                return;
            }
        }

        try {
            const endpoint = isLoginMode ? "/login" : "/signup";
            const payload = { email, password, userType };

            // Add permissions only if the userType is 'Employee'
            if (!isLoginMode && userType === "Employee") {
                payload.permissions = permissions;
            }

            const response = await api.post(endpoint, payload);

            if (isLoginMode) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userType", response.data.userType);
                localStorage.setItem("permissions", JSON.stringify(response.data.permissions));
                console.log("User authenticated successfully");
                window.location.href = "/";
            } else {
                sessionStorage.setItem("token", response.data.token);
                console.log("User registered successfully");
                window.location.href = "/";
            }
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div className="modal-wrapper">
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <h1 className="modal-title">{isLoginMode ? "Login" : "Sign Up"}</h1>
                    <div id="modal-close" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
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
                            type={isLoginMode ? "password" : "text"}
                            value={password}
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </label>
                    {error && <div className="error-message">{error}</div>}
                    <button className="btn-black" type="submit">
                        {isLoginMode ? "Login" : "Sign Up"}
                    </button>
                    <a href="#" onClick={() => setIsLoginMode(!isLoginMode)}>
                        {isLoginMode ? "Don't have an account? Sign up" : "Already have an account? Login"}
                    </a>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
