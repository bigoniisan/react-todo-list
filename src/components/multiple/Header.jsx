import Styles from './Header.module.css'
import Logo from '../single/Logo';
import SearchBar from '../single/SearchBar';
import LoginButton from '../single/LoginButton';

function Header() {

    return (
        <>
            <div className={Styles.content}>
                <div className={Styles.logoContainer}>
                    <Logo />
                </div>
                <div className={Styles.searchbarContainer}> 
                    <SearchBar />
                </div>
                <div className={Styles.loginButtonContainer}>
                    <LoginButton />
                </div>
            </div>
            
        </>
    );
}

export default Header;