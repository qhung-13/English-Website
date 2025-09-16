import { useState } from "react";
import "../assets/styles/Auth.css";

const Auth = () => {
    const [isActive, setActive] = useState(false);


    return (
        <div className= {`container-auth ${isActive ? "active" : ""}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i className="ri-user-fill"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <i className="ri-lock-2-fill"></i>
                    </div>
                    <div className="forgot-link">
                        <a href="/">Forgot Password?</a>
                    </div>
                    <button type="submit" className="button">Login</button>
                    <p>or login with social platforms</p>
                    <div className="social-icons">
                        <a href="/"><i className="ri-google-fill"></i></a>
                        <a href="/"><i className="ri-facebook-fill"></i></a>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i className="ri-user-fill"></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required/>
                        <i className="ri-mail-fill"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <i className="ri-lock-2-fill"></i>
                    </div>
                    <button type="submit" className="button">Register</button>
                    <p>or register with social platforms</p>
                    <div className="social-icons">
                        <a href="/"><i className="ri-google-fill"></i></a>
                        <a href="/"><i className="ri-facebook-fill"></i></a>
                    </div>
                </form>
            </div>

            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account</p>
                    <button className="button btn-register" onClick={() => {setActive(true)}}>Register</button>
                </div>

                <div className="toggle-panel toggle-right">
                    <h1>Welcome Back!</h1>
                    <p>Already have an account?</p>
                    <button className="button btn-login" onClick={() => setActive(false)}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Auth;