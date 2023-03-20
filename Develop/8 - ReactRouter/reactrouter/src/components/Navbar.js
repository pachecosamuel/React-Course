// Style
import styles from "./Navbar.module.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
};

export default Navbar;