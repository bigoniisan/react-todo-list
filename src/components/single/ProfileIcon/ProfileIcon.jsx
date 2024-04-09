import Styles from './ProfileIcon.module.css';

function ProfileIcon(props) {

    function toggleLoginForm() {

    }

    return (
        <a href="#">
            {/* get profile icon from user */}
            <div className={Styles.profileIcon} onClick={() => props.displayLogin(!props.showLogin)}>
                
            </div>
        </a>
    )
}

export default ProfileIcon;