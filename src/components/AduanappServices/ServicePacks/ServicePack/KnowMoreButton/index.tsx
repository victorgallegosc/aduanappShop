import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KnowMoreButton.module.css"

interface KnowMoreButtonProps {
    packNumber: number;
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({packNumber}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details${packNumber}`);
    };
    return (
        <div className={styles.button} onClick={handleClick}>
            <p className="font-body">Conoce Más</p>
        </div>
    );
}

export default KnowMoreButton;