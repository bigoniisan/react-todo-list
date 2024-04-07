import Styles from './Header.module.css'
import Logo from '../single/Logo';
import SearchBar from '../single/SearchBar';
import LoginButton from '../single/LoginButton/LoginButton';
import SideMenu from '../single/SideMenu/SideMenu';

function Header() {

    return (
        <>
            <div className={Styles.content}>
                <SideMenu />
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