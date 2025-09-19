import { useState } from "react";
import styles from "../assets/styles/Auth.module.css"; 

const Auth = () => {
    const [isActive, setActive] = useState(false);


    return (
        <div className={styles["auth-wrapper"]}>
            <div className= {`${styles["container-auth"]} ${isActive ? `${styles["active"]}` : ""}`}>
                <div className={`${styles["form-box"]} ${styles["login"]}`}>
                    <form action="">
                        <h1>Login</h1>
                        <div className={styles["input-box"]}>
                            <input type="text" placeholder="Username" required/>
                            <i className="ri-user-fill"></i>
                        </div>
                        <div className={styles["input-box"]}>
                            <input type="password" placeholder="Password" required/>
                            <i className="ri-lock-2-fill"></i>
                        </div>
                        <div className={styles["forgot-link"]}>
                            <a href="/">Forgot Password?</a>
                        </div>
                        <button type="submit" className={styles["btn"]}>Login</button>
                        <p>or login with social platforms</p>
                        <div className={styles["social-icons"]}>
                            <a href="/"><i className="ri-google-fill"></i></a>
                            <a href="/"><i className="ri-facebook-fill"></i></a>
                        </div>
                    </form>
                </div>

                <div className={`${styles["form-box"]} ${styles["register"]}`}>
                    <form action="">
                        <h1>Registration</h1>
                        <div className={styles["input-box"]}>
                            <input type="text" placeholder="Username" required/>
                            <i className="ri-user-fill"></i>
                        </div>
                        <div className={styles["input-box"]}>
                            <input type="email" placeholder="Email" required/>
                            <i className="ri-mail-fill"></i>
                        </div>
                        <div className={styles["input-box"]}>
                            <input type="password" placeholder="Password" required/>
                            <i className="ri-lock-2-fill"></i>
                        </div>
                        <button type="submit" className={styles["btn"]}>Register</button>
                        <p>or register with social platforms</p>
                        <div className={styles["social-icons"]}>
                            <a href="/"><i className="ri-google-fill"></i></a>
                            <a href="/"><i className="ri-facebook-fill"></i></a>
                        </div>
                    </form>
                </div>

                <div className={styles["toggle-box"]}>
                    <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
                        <h1>Hello, Welcome!</h1>
                        <p>Don't have an account</p>
                        <button className={`${styles["btn"]} ${styles["btn-register"]}`} onClick={() => {setActive(true)}}>Register</button>
                    </div>

                    <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}>
                        <h1>Welcome Back!</h1>
                        <p>Already have an account?</p>
                        <button className={`${styles["btn"]} ${styles["btn-login"]}`} onClick={() => setActive(false)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;