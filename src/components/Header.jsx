import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import NavBarTop from './NavBarTop'
import NavBar from './NavBar'
import heroImg from '/src/assets/image/heroImage.jpg'
import '../assets/styles/Header.scss'

const Header = () => {
    const [stickyClass, setStickyClass] = useState("navBarContainer");
    const [headSticky, setheadSticky] = useState("navBarContainer");

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window.scrollY > 0) {
            setStickyClass("navBarContainerActive");
            setheadSticky("");
        } else {
            setStickyClass("navBarContainer");
            setheadSticky("fixed");
        }
    };

    return (
        <header className={headSticky} >
            <div className={stickyClass} >
                <NavBarTop />
                <div className="headerHero">
                    <h1 className="headerHeroTitle">Lumens</h1>
                </div>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;