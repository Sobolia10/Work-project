import { Link } from "react-router-dom";

import { NAV_BAR_DATA } from "./constants";

import './styles.scss';

const NavBarComponent = () => {
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    {NAV_BAR_DATA.map(({ id, label, path }) => (
                        <li key={id} className="nav__link">
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavBarComponent;