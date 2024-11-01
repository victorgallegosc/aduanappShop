import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo-naranja.svg";
import linkedin from "../../assets/icons/LinkedIn.png";
import arrowUp from "../../assets/icons/Upwards.png";

const Footer: React.FC = () => {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className={styles.footer}>
            <div className={styles.infoContainer}>
                <div className={styles.infoBlock}>
                    <img src={logo} alt="Logo Aduanapp" />
                    <p className="font-body" style={{ margin: "20px 0", lineHeight: "1.7" }}>
                        Estamos innovando para traer más transparencia al mundo de aduanas. Por aire, mar, y tierra.
                    </p>
                    <img src={linkedin} alt="LinkedIn" style={{ width: "30px" }} />
                </div>

                <div className={styles.infoBlock}>
                    <p className="font-body-bold" style={{ fontSize: "14px", marginBottom: "15px" }}>
                        Quick Links
                    </p>
                    <div className={styles.line} />
                    <p className="font-body" style={{ marginBottom: "15px" }}>
                        Términos y Condiciones
                    </p>
                    <p className="font-body">Aviso de Privacidad</p>
                </div>

                <img
                    src={arrowUp}
                    className={styles.arrowUp}
                    alt="Go To Top Button"
                    onClick={scrollToTop}
                />
            </div>
        </div>
    );
};

export default Footer;
