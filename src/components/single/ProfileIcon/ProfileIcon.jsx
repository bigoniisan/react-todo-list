import Styles from './ProfileIcon.module.css';

function ProfileIcon(props) {

    function toggleLoginForm() {

    }

    return (
        <a href="#">
            {/* get profile icon from user */}
            <div className={Styles.profileIcon} onClick={() => props.displayLogin(!props.showLogin)}>
                <img src={props.profilePicture} alt="" style={{
                    backgroundRepeat: 'no-repeat',
                    width: '50%',
                    height: '50%'
                }}/>
            </div>
        </a>
    )
}

export default ProfileIcon;