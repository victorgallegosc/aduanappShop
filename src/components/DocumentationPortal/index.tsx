import React from "react";
import MiPrimeraExportacionDP from "./MiPrimeraExportacion";
import styles from "./DocumentationPortal.module.css";
import { Route, Routes } from "react-router-dom";

const DocumentationPortal: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.headerText}>
                    <h2 style={{ color: "#ff4407" }}>Agiliza tu Servicio:</h2>
                    <h2 style={{ color: "gray" }}>Sube documentación que vamos a necesitar (opcional)</h2>
                </div>
                <div className={styles.containerHeaderMessage}>
                    <p className="font-body-bold">
                        ¡Ya casi, 1 paso más y terminamos!
                    </p>
                </div>
            </div>
            <Routes>
                <Route path="/mi-primera-exportacion" element={<MiPrimeraExportacionDP />} />
            </Routes>
        </div>
    );
};

export default DocumentationPortal;
