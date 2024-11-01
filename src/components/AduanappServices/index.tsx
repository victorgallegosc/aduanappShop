import React from "react";
import styles from "./AduanappServices.module.css";
import ServicePacks from "./ServicePacks";

const AduanappServices: React.FC = () => {
    return (
        <>
            <div className={styles.titleBackground}>
                <div className={styles.titleContainer}>
                    <p className={["font-title", styles.title].join(" ")}>
                        SERVICIOS ADUANAS
                    </p>
                    <p className={["font-body", styles.text].join(" ")}>
                        Somos expertos en aduanas de importación y exportación, ya
                        sea terrestre, marítima o aérea. Te ayudamos a encontrar la
                        agencia aduanal perfecta para tus necesidades.
                    </p>
                </div>
            </div>
            <ServicePacks />
        </>
    );
};

export default AduanappServices;
