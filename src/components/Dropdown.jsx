import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {

    return (
        <div className={`NavBarDropdown ${dropdown ? "show" : "hide"}`}>
            {submenus.map((submenu, index) => (
                <div key={index} className="NavBarDropdownItems">
                    <Link href={submenu.url}>{submenu.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;