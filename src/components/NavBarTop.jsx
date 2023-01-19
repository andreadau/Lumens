import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useCallback } from 'react'
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import '../UI/styles/CommonClass.scss';

const NavBar = (props) => {
    // Modal of login and signup
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    // Component of login and signup
    // Mobile
    const [isMobile, setIsMobile] = useState(false);

    // Effect based on window size
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        if (showSignupModal) {
            setShowLoginModal(false);
        }
    }, [showSignupModal]);

    useEffect(() => {
        if (showLoginModal) {
            setShowSignupModal(false);
        }
    }, [showLoginModal]);

    const handleClose = useCallback(() => {
        setShowLoginModal(false);
        setShowSignupModal(false);
    }, [setShowSignupModal]);

    const handleShowLogin = useCallback(() => {
        setShowLoginModal(true);
    }, [setShowLoginModal]);

    const handleShowSignup = useCallback(() => {
        setShowSignupModal(true);
    }, [setShowSignupModal]);

    // Left items
    const leftItems = [
        "Diamanti",
        "Oro",
        "Argento",
        "Rodio",
    ];

    return (
        <>
            <div className="header-container">
                {!isMobile ? (
                    <ul className="navBarTop_Left">
                        {leftItems.map((item, i) => {
                            return (
                                <a href="" key={i}><li className="navBarTop_Link">{item}</li></a>
                            );
                        })}
                    </ul>
                ) : null}
                <ul className="navBarTop_Right">
                    {!isMobile ? (
                        <>
                            <a ><li className={`navBarTop_Link ${isMobile ? 'hidden' : null}`}>Ricerca</li></a>
                            <a onClick={() => setShowLoginModal(true)}><li className={`navBarTop_Link ${isMobile ? 'hidden' : null}`}>Login</li></a>
                        </>
                    ) : null}
                    <a onClick={() => setShowSignupModal(true)}><li className={`navBarTop_Link `}>{isMobile ? <FontAwesomeIcon icon={faUser} size="xl" /> : 'Registrati'}</li></a>
                    <a href=""><li className="navBarTop_Link"><FontAwesomeIcon icon={faCartShopping} size={`${isMobile ? "xl" : "lg"}`} /></li></a>
                </ul>
            </div>
            <div>
                {showLoginModal && <LoginModal onClose={handleClose} showSignup={handleShowSignup} />}
                {showSignupModal && <SignupModal onClose={handleClose} showLogin={handleShowLogin} />}
            </div>
        </>
    )
}

export default NavBar;