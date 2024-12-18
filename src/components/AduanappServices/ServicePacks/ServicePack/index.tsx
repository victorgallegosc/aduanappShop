import React from "react";
import KnowMoreButton from "./KnowMoreButton";
import styles from "./ServicePack.module.css";
import icon1 from "../../../../assets/icons/icon1.svg";
import icon2 from "../../../../assets/icons/icon2.svg";
import icon3 from "../../../../assets/icons/icon3.svg";
import icon4 from "../../../../assets/icons/icon4.svg";
import icon5 from "../../../../assets/icons/icon5.svg";
import icon6 from "../../../../assets/icons/icon6.svg";
import icon7 from "../../../../assets/icons/icon7.svg";
import icon8 from "../../../../assets/icons/icon8.svg";

interface ServicePackProps {
    borderColor: string;
    icon: string;
    text: string;
    price: string;
    packNumber: number;
}

// Mapping of icon identifiers to their respective SVG paths
const icons: { [key: string]: string } = {
    "1": icon1,
    "2": icon2,
    "3": icon3,
    "4": icon4,
    "5": icon5,
    "6": icon6,
    "7": icon7,
    "8": icon8,
};

const ServicePack: React.FC<ServicePackProps> = (
    { borderColor, icon, text, price, packNumber }
) => {
    return (
        <div className={styles.servicePack} style={{ borderColor }}>
            <img className={styles.packLogo} src={icons[icon]} alt={`Icon for ${text}`} />
            <p className="font-body-bold">{text}</p>
            <p className="font-body-thin">${price}</p>
            <KnowMoreButton packNumber={packNumber} />
        </div>
    );
};

export default ServicePack;
