import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo-blanco.svg";
import shortlogo from "../../assets/short-logo-blanco.svg"
import BurgerMenu from "../BurgerMenu";

const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className={styles.header}>
            {isMobile ? (
                <img
                    src={shortlogo}
                    alt="Aduanapp Logo"
                    className={styles.logo}
                ></img>
            ) :
                <img
                    src={logo}
                    alt="Aduanapp Logo"
                    className={styles.logo}
                ></img>}
            {isMobile ? <BurgerMenu /> : (
                <div className={["font-body-bold", styles.contact].join(" ")}>
                    <p>MX</p>
                    <p>+52 56 3836 3290</p>
                    <p>notificaciones@aduanapp.mx</p>
                </div>
            )}
        </header>
    );
};

export default Header;
