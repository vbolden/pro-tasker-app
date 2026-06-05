import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Auth() {
    const [activeTab, setActiveTab] = useState('signup');
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loginData, setLoginData] = useState({
        username: '',
        password: ""
    });

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/api/users/register", signupData);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/api/users/login", loginData);

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <div className="auth-container">
            <aside className="auth-left">
                <h1>Organize your work.</h1>
                <h2>Own your day.</h2>
            </aside>
            <div className="auth-right">

                <div className="form">

                    <ul className="tab-group">
                        <li className={`tab ${activeTab === 'signup' ? "tab-active" : ""}`}>
                            <a href="#signup" onClick={() => setActiveTab("signup")}>Sign Up</a>
                        </li>
                        <li className={`tab ${activeTab === 'login' ? "tab-active" : ""}`}>
                            <a href="#login" onClick={() => setActiveTab("login")}>Log In</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        {activeTab === "signup" && (
                            <div id="signup">
                                <h1>Sign Up for Free</h1>

                                <form onSubmit={handleRegister}>
                                    <div className="top-row">
                                        <input type="text" placeholder="First Name" required />
                                        <input type="text" placeholder="Last Name" required />
                                    </div>
                                    <div className="bottom-row">
                                        <input type="text" placeholder="Email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} required />
                                        <input type="text" placeholder="Username" value={signupData.username} onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} required />
                                        <input type="password" placeholder="Password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} required />
                                        {/* <input type="password" placeholder="Confirm Password" required /> */}
                                        <input type="submit" value="Register" className="button" />
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === "login" && (<div id="login">
                            <h1>Welcome Back</h1>

                            <form onSubmit={handleLogin}>
                                <input type="text" placeholder="Username" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} required />
                                <input type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required />
                                <p className="forgot"><a href="#">Forgot Password?</a></p>
                                <input type="submit" value="Log In" className="button" />
                            </form>

                        </div>)}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Auth;