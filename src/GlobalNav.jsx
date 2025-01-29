import {useState} from 'react';
import "./GlobalNav.css";
import menu from "./menu";

function GlobalNav({className, gotoPage}) {
    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map( item => {
        return(
            <li key = {item.name} className = "global-nav__item">
                <a 
                    className="global-nav__link"
                    href = {item.path}
                    onClick = {gotoPage}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <nav className= {`global-nav ${className}`}>
            <button
                onClick = {() => setShowMenu(!showMenu)}
                className="global-nav__hamburger"
            >
                &#9776;

            </button>
            <ul className= {`global-nav__list ${!showMenu ? "" : "global-nav__list--hamburgered"}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;