import './SignInPopup.css';

function SignInPopup(props) {
    return (
        <div className="popup-screen">
            <div className="popup-box" onClick={props.close}>

            </div>
        </div>
    )
}

export default SignInPopup
