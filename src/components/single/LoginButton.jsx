import Background from "../../assets/anonymous-profile-picture.jpg"

function LoginButton() {

    const styles = {
        border: "none",
        color: "white",
        borderRadius: "50%",
        margin: "4px 2px",
        padding: "30px"
    }

    return (
        <>
            <a href="#">
                <button style={styles}></button>
            </a>
        </>
    )
}

export default LoginButton;