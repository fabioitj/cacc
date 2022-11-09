import { useState } from "react";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBarAdmin.css";
import { signout } from "./../../../hooks/authApi"

const NavBarAdmin = () => {
    const [settingsClicked, setSettingsClicked] = useState(false);

    const handleSettingsClicked = () => {
        setSettingsClicked(!settingsClicked);
    }

    const handleSignout = () => {
        signout();
    }

    window.onclick = (e) => {
        if(e.pageY > 50)
            setSettingsClicked(false);
    }

    return (
        <>
            <div className="NavBarAdmin">
                <div className="SettingsBox">
                    <button onClick={handleSettingsClicked} className="SettingsButton"><FaCogs/></button>
                </div>
            </div>
            {
                settingsClicked &&
                <div className={settingsClicked ? "SettingsPopUp" : "SettingsPopUp SettingsPopUpShowed"}>
                    <div className="SettingsPopUpItem">
                        <div className="SettingsPopUpImage">
                            <Link onClick={handleSignout} to="/eventos"><FaSignOutAlt/></Link>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default NavBarAdmin;