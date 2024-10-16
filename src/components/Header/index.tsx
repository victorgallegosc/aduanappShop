import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo-blanco.svg";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Aduanapp Logo" className={styles.logo}></img>
            <div className={["font-body-medium", styles.contact].join(" ")}>
                <p>MX</p>
                <p>+52 56 3836 3290</p>
                <p>notificaciones@aduanapp.mx</p>
            </div>
        </header>
    );
};

export default Header;
