import { NavLink } from "react-router-dom"
export const Header = () => {
    return (
        <header>
            <div className="flex nav-bar">
                <div className="website-logo">
                    WEBSITE LOGO
                </div>
                <ul className="flex nav-link-container">
                    <li>
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/country" className="nav-link">
                            Country
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}