// styles
import styles from "./NavBar.module.css";
// cfg
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.mynavbar}>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
};

export default NavBar;