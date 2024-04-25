import { useState } from 'react';
import Styles from './LoginButton.module.css';

function LoginButton(props) {

    // TODO: Change page based on log in status

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitType = e.nativeEvent.submitter.name;
        const loginData = { email, password, rememberMe };

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
                    console.log("Sign In Successful");
                    console.log(await response.json());
                } else {
                    setInvalidCredentials(true);
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
                    console.log(await response.json());
                    console.log("Sign Up Successful");
                } else {
                    setEmailExists(true);
                    console.log(await response.json());
                }
            } catch(error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <form className={Styles.loginFormContainer} onSubmit={handleSubmit}>
                {emailExists ? <label className={Styles.emailExists}>Email already exists</label> : null}
                {invalidCredentials ? <label className={Styles.invalidCredentials}>Invalid credentials</label> : null}
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
        </>
    )
}

export default LoginButton;