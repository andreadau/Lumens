import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const [selecedItem, setSelectedItem] = useState(false);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
        setSelectedItem(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
        setSelectedItem(false);
    };

    return (
        <li className={"NavBar_List " + (selecedItem ? 'navSelected' : '')} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} >
            <Link type="button" aria-haspopup="menu" to={items.url} aria-expanded={dropdown ? "true" : "false"} className="NavBar_Link">
                {items.title}{' '}
            </Link>
            {items.submenu ? (
                <Dropdown submenus={items.submenu} dropdown={dropdown} />
            ) : (
                ''
            )}
        </li>
    );
}

export default MenuItems;