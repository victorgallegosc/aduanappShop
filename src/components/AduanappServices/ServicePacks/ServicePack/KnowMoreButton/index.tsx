import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KnowMoreButton.module.css"

interface KnowMoreButtonProps {
    packNumber: number;
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({ packNumber }) => {
    const packName = [
        'mi-primera-exportacion',
        'comparativo-aduanas'
    ]
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${packName[packNumber - 1]}`);
    };
    return (
        <div className={styles.button} onClick={handleClick}>
            <p className="font-body">Conoce Más</p>
        </div>
    );
}

export default KnowMoreButton;