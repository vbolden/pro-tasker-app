function Auth() {
    return (
        <div className="auth-container">
            <aside className="auth-left"></aside>
            <div className="auth-right">

                <div className="form">

                    <ul className="tab-group">
                        <li className="tab tab-active">
                            <a href="#signup">Sign Up</a>
                        </li>
                        <li className="tab">
                            <a href="#login">Log In</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="signup">
                            <h1>Sign Up for Free</h1>

                            <form action="/" method="post">
                                <div className="top-row">
                                    <input type="text" placeholder="First Name" required />
                                    <input type="text" placeholder="Last Name" required />
                                </div>
                                <div className="bottom-row">
                                    <input type="text" placeholder="Email" required />
                                    <input type="text" placeholder="Username" required />
                                    <input type="password" placeholder="Password" required />
                                    <input type="password" placeholder="Confirm Password" required />
                                    <input type="submit" value="Register" />
                                </div>
                            </form>

                            <div id="login">
                                <h1>Welcome Back</h1>

                                <form action="/" method="post">
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <p className="forgot"><a href="#">Forgot Password?</a></p>
                                    <input type="submit" value="Log In" />
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Auth;