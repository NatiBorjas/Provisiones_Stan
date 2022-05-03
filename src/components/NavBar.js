import React from 'react';
import CartWidget from "./CartWidget"

import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const stan = 'https://static.wikia.nocookie.net/monkeyisland/images/5/5c/StaninActionanimiert.gif';

    return (
        <>
        <header className="nav-container">
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={'/'}>
                            <img src={stan} className="gif" alt="stan" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/category'}>Provisiones</Link>
                    </li>
                    <li>
                        <a href='/'>Contacto</a>
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