import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!agree) {
            setError("You must agree to the privacy policy and terms.");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Registration failed");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
        } catch (err) {
            console.error("Registration error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        document.body.classList.add("register");
        return () => {
            document.body.classList.remove("register");
        };
    }, []);

    return (
        <>
            <div className="dash-board-main-wrapper">
                <div className="main-center-content-m-left center-content">
                    <div className="rts-register-area">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="single-form-s-wrapper">
                                        <div className="head">
                                            <span>Start your Journey</span>
                                            <h5 className="title">Create an account</h5>
                                        </div>
                                        <div className="body">
                                            <form onSubmit={handleRegister}>
                                                <div className="input-wrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Full Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your mail"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Enter your Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="check-wrapper">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="flexCheckDefault"
                                                            checked={agree}
                                                            onChange={() => setAgree(!agree)}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            I agree to <Link to="/terms">privacy policy & terms</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="rts-btn btn-primary">
                                                    Create Account
                                                </button>
                                                <p>
                                                    Already have an account?{" "}
                                                    <Link className="ml--5" to="/login">
                                                        Sign in
                                                    </Link>
                                                </p>
                                                {error && (
                                                    <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
                                                )}
                                            </form>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
