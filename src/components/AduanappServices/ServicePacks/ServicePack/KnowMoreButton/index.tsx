import React from "react";
import styles from "./KnowMoreButton.module.css"

const KnowMoreButton: React.FC = () => {
    return (
        <div className={styles.button}>
            <p className="font-body">Conoce Más</p>
        </div>
    );
}

export default KnowMoreButton;