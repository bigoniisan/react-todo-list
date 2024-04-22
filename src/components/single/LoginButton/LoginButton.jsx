import { useState } from 'react';
import Styles from './LoginButton.module.css';

function LoginButton(props) {

    const [userEmail, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = { userEmail, password, rememberMe };
        try {

            fetch("http://localhost:5000/api/user/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            }).then(res => console.log(res));
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className={Styles.loginFormContainer} onSubmit={handleSubmit}>
                <div className={Styles.userContainer}>
                    <input 
                        className={Styles.user} 
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="text" 
                        name="userEmail" 
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
                
                <input className={Styles.submit} type="submit" value="Sign in" />
                <input className={Styles.submit} type="submit" value="Sign up" />
            </form>
        </>
    )
}

export default LoginButton;