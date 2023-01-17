import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const NavBar = (prop) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const leftItems = [
        "Diamanti",
        "Oro",
        "Argento",
        "Rodio",
    ];

    return (
        <>
            <div className="header-container">
                <ul className="navBarTop_Left">
                    {leftItems.map((item, i) => {
                        return (
                            <a href="" key={i}><li className="navBarTop_Link">{item}</li></a>
                        );
                    })}
                </ul>
                <ul className="navBarTop_Right">
                    <a href=""><li className="navBarTop_Link">Ricerca</li></a>
                    <a onClick={() => setShowLoginModal(true)}><li className="navBarTop_Link">Login</li></a>
                    <a onClick={() => setShowSignupModal(true)}><li className="navBarTop_Link">Registrati</li></a>
                    <a href=""><li className="navBarTop_Link"><FontAwesomeIcon icon={faCartShopping} /></li></a>
                </ul>
            </div>
            <div>
                {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
                {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
            </div>
        </>
    )
}

export default NavBar;