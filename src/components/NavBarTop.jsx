import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useCallback } from 'react';
import AuthModal from './AuthModal'; // Import the new AuthModal
import '../UI/styles/CommonClass.scss';

const NavBar = () => {
    // Modal state
    const [showAuthModal, setShowAuthModal] = useState(false); // Open the modal by default
    const [isLoginMode, setIsLoginMode] = useState(true); // Default to login mode

    // Mobile detection
    const [isMobile, setIsMobile] = useState(false);

    // Effect for mobile detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClose = useCallback(() => {
        setShowAuthModal(false);
    }, []);

    const handleShowLogin = useCallback(() => {
        setIsLoginMode(true);
        setShowAuthModal(true);
    }, []);

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
                        {leftItems.map((item, i) => (
                            <a href="#" key={i}>
                                <li className="navBarTop_Link">{item}</li>
                            </a>
                        ))}
                    </ul>
                ) : null}
                <ul className="navBarTop_Right">
                    {!isMobile ? (
                        <>
                            <a href="#"><li className="navBarTop_Link">Ricerca</li></a>
                            <a onClick={handleShowLogin}><li className="navBarTop_Link">Login</li></a>
                        </>
                    ) : (
                        <a onClick={handleShowLogin}>
                            <li className="navBarTop_Link">
                                <FontAwesomeIcon icon={faUser} size="xl" />
                            </li>
                        </a>
                    )}
                    <a href="#">
                        <li className="navBarTop_Link">
                            <FontAwesomeIcon icon={faCartShopping} size={`${isMobile ? "xl" : "lg"}`} />
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                {showAuthModal &&
                    <AuthModal
                        onClose={handleClose}
                        userType="Member" 
                    />
                }
            </div>
        </>
    );
}

export default NavBar;
