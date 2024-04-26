import { useRef, useState } from 'react';
import Styles from './Header.module.css'
import Logo from '../single/Logo';
import SearchBar from '../single/SearchBar';
import ProfileIcon from '../single/ProfileIcon/ProfileIcon';
import LoginButton from '../single/LoginButton/LoginButton';
import SideMenu from '../single/SideMenu/SideMenu';

function Header() {

    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [childData, setChildData] = useState(null);

    const handleChildData = (data) => {
        setChildData(data);
        console.log(data.profilePicture);
    }

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
                    <ProfileIcon profilePicture={childData && childData.profilePicture} displayLogin={display => setShowLogin(display)} showLogin={showLogin} />                  
                </div>
                <div className={toggleLoginForm()}>
                    <LoginButton sendDataToParent={handleChildData} />
                </div>
            </div>
            
        </>
    );
}

export default Header;