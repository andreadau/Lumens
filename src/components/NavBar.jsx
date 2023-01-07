import MenuItems from './MenuItems'

const NavBar = () => {
    const menuItems = [
        {
            title: "Nuovi arrivi", url: "/c/nuovi-arrivi",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Collane',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Anelli", url: "/c/anelli",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Fiau',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Collane", url: "/c/collane",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Ciau',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Bracciali", url: "/c/bracciali",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Miao',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Orologi", url: "/c/orologi",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Bau',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Accessori", url: "/c/accessori",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Collane',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Decorazioni", url: "/c/decorazioni",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Collane',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
        {
            title: "Mondo Lumens", url: "mondo-lumens",
            submenu: [
                {
                    title: 'Anelli',
                    url: '/c/nuovi-arrivi/anelli',
                },
                {
                    title: 'Collane',
                    url: '/c/nuovi-arrivi/web-development',
                },
                {
                    title: 'Bracciali',
                    url: '/c/nuovi-arrivi/bracciali',
                },
            ],
        },
    ];

    return (
        <nav className="NavBar">
            <ul className="NavBarList">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    )

}

export default NavBar;