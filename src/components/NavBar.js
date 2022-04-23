import React from 'react';
import CartWidget from "./CartWidget"

import './styles/NavBar.css';

const NavBar = () => {
    const stan = 'https://static.wikia.nocookie.net/monkeyisland/images/5/5c/StaninActionanimiert.gif';

    return (
        <>
        <header className="nav-container">
            <nav>
                <ul className="menu">
                    <li>
                        <img src={stan} alt="stan" />
                    </li>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Provisiones</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar