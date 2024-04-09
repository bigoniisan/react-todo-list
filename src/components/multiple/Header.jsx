import { useRef, useState } from 'react';
import Styles from './Header.module.css'
import Logo from '../single/Logo';
import SearchBar from '../single/SearchBar';
import ProfileIcon from '../single/ProfileIcon/ProfileIcon';
import LoginButton from '../single/LoginButton/LoginButton';
import SideMenu from '../single/SideMenu/SideMenu';

function Header() {

    const [showLogin, setShowLogin] = useState(false);

    function toggleLoginForm() {
        return showLogin ? `${Styles.loginFormContainer}` : `${Styles.loginFormContainerHide}`
    }

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
                <div className={Styles.profileIconContainer}>
                    <ProfileIcon displayLogin={display => setShowLogin(display)} showLogin={showLogin} />                  
                </div>
                <div className={toggleLoginForm()}>
                    <LoginButton />
                </div>
            </div>
            
        </>
    );
}

export default Header;