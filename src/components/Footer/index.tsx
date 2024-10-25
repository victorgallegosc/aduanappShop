import React from "react";
import styles from "./Footer.module.css"
import logo from "../../assets/logo-naranja.svg"
import linkedin from "../../assets/icons/LinkedIn.png"
import arrowUp from "../../assets/icons/Upwards.png"

const Footer: React.FC = () => {

    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.footer}>
            <div className={styles.infoContainer}>
                <div className={styles.infoBlock}>
                    <img src={logo} alt="Logo Aduanapp"></img>
                    <p
                        className="font-body"
                        style={{ marginTop: "20px", marginBottom: "20px", lineHeight: "1.7" }}
                    >
                        Estamos innovando para traer más transparencia al mundo de
                        aduanas. Por aire, mar, y tierra.
                    </p>
                    <img src={linkedin} alt="LinkedIn" style={{ width: "30px" }}></img>
                </div>

                <div className={styles.infoBlock} style={{ marginTop: "-3px" }}>
                    <p
                        className="font-body-bold"
                        style={{ fontSize: "14px", marginBottom: "15px" }}
                    >
                        Quick Links
                    </p>
                    <div className={styles.line}></div>
                    <p className="font-body" style={{ marginBottom: "15px" }}>
                        Términos y Condiciones
                    </p>
                    <p className="font-body">Aviso de Privacidad</p>
                </div>

                <img
                    src={arrowUp}
                    className={styles.arrowUp}
                    alt="Go To Top Button"
                    onClick={ScrollToTop}></img>
            </div>
        </div>
    );
}

export default Footer;