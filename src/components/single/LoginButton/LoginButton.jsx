import { useRef, useState } from 'react';
import Styles from './LoginButton.module.css';

function LoginButton(props) {

    const loginFormRef = useRef(null);
    const [showLogin, setShowLogin] = useState(false);

    function toggleLoginForm() {
        setShowLogin(!showLogin);
        showLogin ? loginFormRef.current.style.display = "flex" : loginFormRef.current.style.display = "none"; 
    }

    return (
        <>
            {/* Pass Props From Child to Parent Component 
                to call toggleLoginForm on LoginForm as a 
                separate component */}
            <a href="#">
                {/* get profile icon from user */}
                <div className={Styles.accountIcon} onClick={toggleLoginForm}>
                
                </div>
            </a>
            <form action="#" className={Styles.loginForm} ref={loginFormRef}>
                <label htmlFor="username">Email</label>
                <input type="text" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <input type="submit" value="Sign in" />
            </form>
        </>
    )
}

export default LoginButton;