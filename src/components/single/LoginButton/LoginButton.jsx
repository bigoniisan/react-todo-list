import Styles from './LoginButton.module.css';

function LoginButton(props) {

    return (
        <>
            <form className={Styles.loginFormContainer} action="#" method='POST'>
                <div className={Styles.emailContainer}>
                    <input className={Styles.emailInput} type="text" name="email" placeholder="Email" required/>
                </div>
                <div className={Styles.passwordContainer}>
                    <input className={Styles.passwordInput} type="password" name="password" placeholder="Password" required/>
                </div>
                <div className={Styles.rememberMeContainer}>
                    <label htmlFor="remember-me">Remember me? </label>
                    <input className={Styles.rememberMeCheckbox} type="checkbox" name="remember-me"/>
                    <a className={Styles.forgotPassword} href="#">Forgot password?</a>
                </div>
                
                <input className={Styles.submit} type="submit" value="Sign in" />
            </form>
        </>
    )
}

export default LoginButton;