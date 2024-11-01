import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo-blanco.svg";
import shortlogo from "../../assets/short-logo-blanco.svg";
import BurgerMenu from "../BurgerMenu";

const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <img
                src={isMobile ? shortlogo : logo}
                alt="Aduanapp Logo"
                className={styles.logo}
            />
            {isMobile ? (
                <BurgerMenu />
            ) : (
                <div className={`${styles.contact} font-body-bold`}>
                    <p>MX</p>
                    <p>+52 56 3836 3290</p>
                    <p>notificaciones@aduanapp.mx</p>
                </div>
            )}
        </header>
    );
};

export default Header;
