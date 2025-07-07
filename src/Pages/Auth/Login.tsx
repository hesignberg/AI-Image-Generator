import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          const token = await user.getIdToken(); // Firebase ID token
    
          // Save token and user
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify({ email: user.email, name: user.displayName, photo: user.photoURL}));
    
          console.log("Logged in with Firebase:", user);
          navigate("/");
    
        } catch (error) {
          console.error("Google Login Error", error);
        }
      };
    

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Login failed");
                return;
            }

            // Save token to localStorage or context
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log("Login successful:", data);
            navigate("/"); 
            // Redirect or show success
            // navigate("/dashboard"); // if using react-router

        } catch (err) {
            console.error("Login error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        document.body.classList.add("register", "page-login");
        return () => {
            document.body.classList.remove("register", "page-login");
        };
    }, []);

    return (
        <>
            <div className="dash-board-main-wrapper pt--40">
                <div className="main-center-content-m-left center-content">
                    <div className="rts-register-area">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="single-form-s-wrapper">
                                        <div className="head">
                                            <span>Welcome Back</span>
                                            <h5 className="title">Login to continue</h5>
                                        </div>
                                        <div className="body">
                                            <form onSubmit={handleLogin}>
                                                <div className="input-wrapper">
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your mail"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                              
                                                <button type="submit" className="rts-btn btn-primary">
                                                    Sign In
                                                </button>
                                                <p>
                                                    Don't have an account?{" "}
                                                    <Link className="ml--5" to="/register">
                                                        Sign Up for Free
                                                    </Link>
                                                </p>
                                            </form>
                                            {error && (
                                                <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="google-login">
                                        <button onClick={handleGoogleLogin} className="rts-btn btn-google">
                                            Sign in with Google
                                        </button> </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
