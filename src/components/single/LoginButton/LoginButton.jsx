import Styles from './LoginButton.module.css';

function LoginButton(props) {

    return (
        <>
        {/* TODO: make log in form display when account icon clicked */}
            <form action="#" className={Styles.loginForm}>
                <label htmlFor="username">Email</label>
                <input type="text" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <input type="submit" value="Sign in" />
            </form>
            <a href="#">
                {/* get profile icon from user */}
                <div className={Styles.accountIcon}>
                
                </div>
            </a>
            
        </>
    )
}

export default LoginButton;