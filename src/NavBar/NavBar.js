import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <nav className={styles.navbar}>
             <div className={styles["nav-icon"]}>
             <i className="fas fa-user"></i>
            </div>
            <div className="nav-links">
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink>
            </div>
           
        </nav>
    );
};

export default NavBar; 