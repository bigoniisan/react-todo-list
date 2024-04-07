import { useRef, useState } from 'react';
import Styles from './SideMenu.module.css';

function SideMenu() {

    const [showSideBar, setShowSideBar] = useState(false);

    function toggleSidebar() {
        setShowSideBar(!showSideBar);
    }

    function displaySideBar() {
        return showSideBar ? `${Styles.sideBarScreen} + ${Styles.sideBarScreenShow}` : `${Styles.sideBarScreen}`;
    }

    return (
        <>
            <div className={displaySideBar()}>

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