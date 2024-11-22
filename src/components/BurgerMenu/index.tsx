import React, { useState } from 'react';
import styles from "./BurgerMenu.module.css";
import { useNavigate } from 'react-router-dom';

const FullScreenBurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const goToShop = () => {
        navigate('/');
        toggleMenu();
    };

    const handleMailTo = () => {
        window.open("mailto:notificaciones@aduanapp.mx", "_blank");
    };

    return (
        <div>
            <div
                className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
                onClick={toggleMenu}
            >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                <div className={styles.menuContent}>
                    <div>
                        <div
                            className={styles.closeButton}
                            onClick={toggleMenu}
                        >
                            &times;
                        </div>
                        <div className={styles.menuTabs}>
                            <a href="http://www.aduanapp.com">Home</a>
                            <a onClick={goToShop}>Shop</a>
                            <a
                                onClick={handleMailTo}
                                style={{
                                    borderBottom: "1px solid #ff9c7a",
                                    paddingBottom: "10px",
                                }}
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.contact} font-body-bold`}>
                        <p>MX</p>
                        <p>
                            <a
                                href="tel:+525638363290"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >
                                +52 56 3836 3290
                            </a>
                        </p>
                        <p
                            onClick={handleMailTo}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            notificaciones@aduanapp.mx
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenBurgerMenu;
