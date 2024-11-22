import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo-naranja.svg";
import linkedin from "../../assets/icons/LinkedIn.png";
import arrowUp from "../../assets/icons/Upwards.png";

const Footer: React.FC = () => {
    const scrollToTop = () => window.scrollTo(0, 0);

    const handleTerms = () => {
        window.open("https://aduanapp.com/terminos", "_blank");
    };
    
    const handlePrivacy = () => {
        window.open("https://aduanapp.com/privacidad", "_blank");
    };

    const handleLInkedIn = () => {
        window.open("https://www.linkedin.com/company/aduanapp", "_blank");
    };

    return (
        <div className={styles.footer}>
            <div className={styles.infoContainer}>
                <div className={styles.infoBlock}>
                    <img src={logo} alt="Logo Aduanapp" />
                    <p className="font-body" style={{ margin: "20px 0", lineHeight: "1.7" }}>
                        Estamos innovando para traer más transparencia al mundo de aduanas. Por aire, mar, y tierra.
                    </p>
                    <img src={linkedin} alt="LinkedIn" style={{ width: "30px", cursor: "pointer" }} onClick={handleLInkedIn} />
                </div>

                <div className={styles.infoBlock}>
                    <p className="font-body-bold" style={{ fontSize: "14px", marginBottom: "15px" }}>
                        Quick Links
                    </p>
                    <div className={styles.line} />
                    <p className="font-body" style={{ marginBottom: "15px", cursor: "pointer" }} onClick={handleTerms}>
                        Términos y Condiciones
                    </p>
                    <p className="font-body" style={{cursor: "pointer"}} onClick={handlePrivacy}>Aviso de Privacidad</p>
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
