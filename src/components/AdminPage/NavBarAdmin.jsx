import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/NavBarAdmin.scss';

const NavBarAdmin = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update the isMobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar-admin">
            <div className="logo">
                <Link to="/">Lumens</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <span className="search-icon">🔍</span>
            </div>
            <div className="user-section">
                <div className="user-avatar">
                    {isMobile ? (
                        <span className="menu-icon">👩🏻</span>
                    ) : (
                        <span>User(2308a4d5)
                            <span className="menu-icon">👩🏻</span>
                        </span>

                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBarAdmin;
