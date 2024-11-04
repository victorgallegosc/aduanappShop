import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServiceInformationPortal.module.css";

// Define the keys for the form data type
type FormDataKeys = keyof typeof initialFormData;

// Initial state for the form data
const initialFormData = {
    CustomCode: "",
    ServiceType: "",
    Country: "",
    HSCode: "",
};

const ServiceInformationPortal: React.FC = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // Update form data on input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name as FormDataKeys]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.ServiceType) {
            alert("Por favor, selecciona un tipo de servicio.");
            return;
        }

        console.log("Form Data:", formData);
    };

    // Navigate back to the previous page
    const goBack = () => navigate(-1);

    // Check if the view is mobile based on window width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 720);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Render the form
    const renderForm = () => (
        <form
            className={
                isMobile ? styles.formContainerMbl : styles.formContainer
            }
            onSubmit={handleSubmit}
        >
            {["ServiceType"].map((type, index) => (
                <div className={styles.formField} key={index}>
                    <label>{"Tipo de Servicio* (escoger una)"}</label>
                    <div className={styles.border}>
                        {["importacion", "exportacion"].map((option) => (
                            <label key={option}>
                                <input
                                    name={type}
                                    type="radio"
                                    value={option}
                                    onChange={handleChange}
                                />
                                {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            {["CustomCode", "Country", "HSCode"].map((field, index) => (
                <div className={styles.formField} key={index}>
                    <label>
                        {field === "CustomCode" && "Tipo de aduana (opcional)"}
                        {field === "Country" && "País de Origen (opcional)"}
                        {field === "HSCode" && "Código Arancelario (opcional)"}
                    </label>
                    <input
                        name={field}
                        type={
                            field === "Email"
                                ? "email"
                                : field === "Phone"
                                ? "tel"
                                : "text"
                        }
                        placeholder={
                            field === "CustomCode"
                                ? "Tipo de Aduana"
                                : field === "Country"
                                ? "País de Origen"
                                : "Código Arancelario"
                        }
                        value={formData[field as FormDataKeys]}
                        onChange={handleChange}
                        required={field === "ServiceType"}
                    />
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

export default ServiceInformationPortal;