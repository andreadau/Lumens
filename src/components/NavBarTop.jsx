import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../assets/Header.scss'

const NavBar = (prop) => {
    const leftItems = [
        "Diamanti",
        "Oro",
        "Argento",
        "Rodio",
    ];

    return (
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
                <a href=""><li className="navBarTop_Link">Login</li></a>
                <a href=""><li className="navBarTop_Link"><FontAwesomeIcon icon={faCartShopping} /></li></a>
            </ul>
        </div>
    )
}

export default NavBar;