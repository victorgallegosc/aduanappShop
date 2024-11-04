import React, { useEffect, useState } from "react";
import styles from "./RFCPortal.module.css";
import { useNavigate } from "react-router-dom";


const RFCPortal: React.FC = () => {
    // Initial state for the form data
    const initialFormData = {
        rfc: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // Check if the view is mobile based on window width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 720);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    // Navigate back to the previous page
    const goBack = () => navigate(-1);

    const renderForm = () => (
        <form
            className={
                isMobile ? styles.formContainerMbl : styles.formContainer
            }
            onSubmit={handleSubmit}
        >
            {["rfc"].map((field, index) => (
                <div className={styles.formField} key={index}>
                    <label>{field === "rfc" && "RFC*"}</label>
                    <input name={field} type="text" placeholder="RFC" />
                </div>
            ))}

            <div className="back-and-continue-button">
                <div className="secondary-button font-body" onClick={goBack}>
                    Atrás
                </div>
                <button className="primary-button font-body" type="submit">
                    Continuar
                </button>
            </div>
        </form>
    );

    return (
        <div className={styles.mainContainer}>
            {isMobile && (
                <div className={styles.containerHeaderMessage}>
                    <p className="font-body-bold">
                        ¡Ya casi, 2 pasos más y terminamos!
                    </p>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.containerHeader}>
                    <h2>Informacion requerida*</h2>
                    {!isMobile && (
                        <div className={styles.containerHeaderMessage}>
                            <p className="font-body-bold">
                                ¡Ya casi, 2 pasos más y terminamos!
                            </p>
                        </div>
                    )}
                </div>
                {renderForm()}
            </div>
        </div>
    );
};

export default RFCPortal;
