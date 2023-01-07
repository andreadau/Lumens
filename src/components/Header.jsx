import ReactDOM from 'react-dom'
import { useState } from 'react'
import NavBarTop from './NavBarTop'
import NavBar from './NavBar'
import '../assets/styles/Header.scss'

const Header = () => {

    return (
        <header>
            <NavBarTop />
            <div className="headerHero">
                <h1 className="headerHeroTitle">Lumens</h1>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;