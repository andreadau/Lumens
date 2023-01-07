import '../assets/Header.scss'

const NavBar = (props) => {
    const items = [
        "Nuovi arrivi",
        "Anelli",
        "Collane",
        "Bracciali",
        "Orologi",
        "Accessori",
        "Decorazioni",
        "Mondo Lumens",
    ];
    
    return (
        <nav className="NavBar">
            <ul className="NavBarList">
                {items.map((item, i) => {
                    return (
                        <a href="" key={i}><li className="headerHero_Link">{item}</li></a>
                    );
                })}
            </ul>
        </nav>
    )

}

export default NavBar;