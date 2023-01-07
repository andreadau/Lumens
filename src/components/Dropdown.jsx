import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {

    return (
        <div className={`dropdown ${dropdown ? "show" : ""}`}>
            <div className="NavBarDropdown">
                {submenus.map((submenu, index) => (
                    <div key={index} className="NavBarDropdownItems">
                        <Link href={submenu.url}>{submenu.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;