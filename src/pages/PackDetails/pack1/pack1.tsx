import React from "react";
import styles from "./Pack1Details.module.css"
import headerImage from "../../../assets/img/pack1.png"
import icon from "../../../assets/icons/icon1.svg"

// En este componente, aparece una linea blanca de 1px entre el Header y este componente

const Pack1Details: React.FC = () => {
    return (
        <div style={{ height: "400px", position: "relative" }}>
            <img
                src={headerImage}
                style={{
                    height: "fit-content",
                    width: "100%",
                    objectFit: "cover",
                }}
            ></img>
            <div className={styles.iconDiv}>
                <img src={icon} style={{ width: "150px" }}></img>
            </div>
        </div>
    );
}

export default Pack1Details;