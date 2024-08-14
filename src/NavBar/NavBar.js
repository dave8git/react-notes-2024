import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <nav className={styles.navbar}>
             <div className={styles["nav-icon"]}>
             <i className="fas fa-user"></i>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/favorite">Favorite</a>
            </div>
           
        </nav>
    );
};

export default NavBar; 