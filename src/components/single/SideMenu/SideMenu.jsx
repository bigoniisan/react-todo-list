import { useState } from 'react';
import Styles from './SideMenu.module.css';

function SideMenu() {

    const [showSideBar, setShowSideBar] = useState(false);

    function toggleSidebar() {
        setShowSideBar(!showSideBar);
    }

    function displaySideBar() {
        return showSideBar ? `${Styles.sideBarScreen} + ${Styles.sideBarScreenShow}` : `${Styles.sideBarScreen}`;
    }

    function displaySideBarButton() {
        return showSideBar ? `${Styles.sideBarButtonShow}` :  `${Styles.sideBarButton}`;
    }

    return (
        <>
            <div className={displaySideBar()}>
                <button className={displaySideBarButton()}>HomePage</button>
                <button className={displaySideBarButton()}>Login</button>
                <button className={displaySideBarButton()}>Settings</button>
                <button className={displaySideBarButton()}>Sign Up</button>
                <button className={displaySideBarButton()}>Upload</button>
                <button className={displaySideBarButton()}>User Channel</button>
                <button className={displaySideBarButton()}>History</button>
            </div>
            <div className={Styles.menuContainer} onClick={toggleSidebar}>
                <div className={Styles.menuBar1}></div>
                <div className={Styles.menuBar2}></div>
                <div className={Styles.menuBar3}></div>
            </div>
        </>
    )
}

export default SideMenu;