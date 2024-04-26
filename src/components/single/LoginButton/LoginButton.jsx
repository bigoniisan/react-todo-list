import { useState } from 'react';
import validator from 'validator';
import Styles from './LoginButton.module.css';

function LoginButton({ sendDataToParent }) {

    // TODO: Change page based on log in status

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [signedIn, setSignedIn] = useState(false);
    // const [showUserDropdown, setShowUserDropdown] = useState(false);

    function sendDataFromChild(data) {
        sendDataToParent(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitType = e.nativeEvent.submitter.name;
        const loginData = { email, password, rememberMe };
        if (!validator.isEmail(email)) {
            setError("Invalid email");
            return;
        }

        /**
            Cookies are often used for implementing authentication mechanisms such as 
            session-based authentication or token-based authentication. After a user logs in, 
            the server creates a session or issues a token and sends it to the client as a cookie. 
            Subsequent requests from the client include this cookie, allowing the server to 
            authenticate the user.
         */

        if (submitType === "signIn") {
            try {
                const response = await fetch("http://localhost:5000/api/user/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                });
                if (response.ok) {
                    setError(null);
                    setSignedIn(true);
                    const userData = await response.json();
                    sendDataFromChild(userData);
                    console.log("Sign In Successful");
                } else {
                    setError("Incorrect email or password");
                    console.log(await response.json());
                }
            } catch(error) {
                console.log(error);
            }
        } else if (submitType === "signUp") {
            try {
                const response = await fetch("http://localhost:5000/api/user/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                });
                if (response.ok) {
                    setError(null);
                    setSignedIn(true);
                    const userData = await response.json();
                    sendDataFromChild(userData);
                    console.log("Sign Up Successful");
                } else {
                    setError("Email already exists");
                    console.log(await response.json());
                }
            } catch(error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            {/* Display sign in/sign up form if not signed in */}
            {!signedIn && (
                <form className={Styles.loginFormContainer} onSubmit={handleSubmit}>
                    {error ? <label className={Styles.error}>{error}</label> : null}
                    <div className={Styles.userContainer}>
                        <input 
                            className={Styles.user} 
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            required/>
                    </div>
                    <div className={Styles.passwordContainer}>
                        <input 
                            className={Styles.passwordInput} 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            required/>
                    </div>
                    <div className={Styles.rememberMeContainer}>
                        <label htmlFor="remember-me">Remember me? </label>
                        <input 
                            className={Styles.rememberMeCheckbox} 
                            onChange={(e) => setRememberMe(e.target.value)}
                            type="checkbox" 
                            name="rememberMe"/>
                        <a className={Styles.forgotPassword} href="#">Forgot password?</a>
                    </div>
                    <input 
                        className={Styles.signIn} 
                        name="signIn" type="submit" value="Sign in" />
                    <input 
                        className={Styles.signUp} 
                        name="signUp" type="submit" value="Sign up" />
                </form>
            )}

            {/* Display user panel if signed in */}
            {signedIn && (
                <div className={Styles.userDropdown}>
                    <div className={Styles.dropdownMenu}>
                        <a className={Styles.dropdownItem} href="#">Profile</a>
                        <a className={Styles.dropdownItem} href="#">Settings</a>
                        <div className={Styles.dropdownDivider}></div>
                        <a className={Styles.dropdownItem} href="#">Logout</a>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginButton;