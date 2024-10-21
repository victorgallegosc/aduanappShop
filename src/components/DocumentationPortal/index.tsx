import React, { useState, useRef } from "react";
import styles from "./DocumentationPortal.module.css";

const DocumentationPortal: React.FC = () => {
    const [formData, setFormData] = useState({
        fichaTecnica: null,
        descripcion: "",
        acuerdoCompra: null,
        factura: null,
        fotoEmbalaje: null,
        bolGuia: null,
    });

    const fichaTecnicaRef = useRef<HTMLInputElement | null>(null);
    const acuerdoCompraRef = useRef<HTMLInputElement | null>(null);
    const facturaRef = useRef<HTMLInputElement | null>(null);
    const fotoEmbalajeRef = useRef<HTMLInputElement | null>(null);
    const bolGuiaRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        fieldName: string
    ) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({
            ...formData,
            [fieldName]: file,
        });
    };

    const handleButtonClick = (inputRef: React.RefObject<HTMLInputElement>) => {
        inputRef.current?.click();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.formField}>
                    <label>Ficha técnica</label>
                    <input
                        ref={fichaTecnicaRef}
                        type="file"
                        accept=".jpg,.jpeg,.pdf"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "fichaTecnica")}
                        required
                    />
                    <button
                        type="button"
                        className={styles.customFileButton}
                        onClick={() => handleButtonClick(fichaTecnicaRef)}
                    >
                        Seleccionar Archivo
                    </button>
                    <p style={{ fontSize: "10px", paddingTop: "2px" }}>
                        Accepted file types: jpg, jpeg, pdf, Max. file size: 10
                        MB.
                    </p>
                </div>

                <div className={styles.formField}>
                    <label>Descripción de uso y función.</label>
                    <input
                        name="descripcion"
                        placeholder="Descripción breve."
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formField}>
                    <label>
                        Acuerdo de compraventa con proveedor (incoterm)
                    </label>
                    <input
                        ref={acuerdoCompraRef}
                        type="file"
                        accept=".jpg,.jpeg,.pdf"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "acuerdoCompra")}
                        required
                    />
                    <button
                        type="button"
                        className={styles.customFileButton}
                        onClick={() => handleButtonClick(acuerdoCompraRef)}
                    >
                        Seleccionar Archivo
                    </button>
                    <p style={{ fontSize: "10px", paddingTop: "2px" }}>
                        Accepted file types: jpg, jpeg, pdf, Max. file size: 10
                        MB.
                    </p>
                </div>

                <div className={styles.formField}>
                    <label>
                        Factura, listado de empaque, órden de compra o similar.
                    </label>
                    <input
                        ref={facturaRef}
                        type="file"
                        accept=".jpg,.jpeg,.pdf"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "factura")}
                        required
                    />
                    <button
                        type="button"
                        className={styles.customFileButton}
                        onClick={() => handleButtonClick(facturaRef)}
                    >
                        Seleccionar Archivo
                    </button>
                    <p style={{ fontSize: "10px", paddingTop: "2px" }}>
                        Accepted file types: jpg, jpeg, pdf, Max. file size: 10
                        MB.
                    </p>
                </div>

                <div className={styles.formField}>
                    <label>Opcional foto de embalaje de envío</label>
                    <input
                        ref={fotoEmbalajeRef}
                        type="file"
                        accept=".jpg,.jpeg,.pdf"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "fotoEmbalaje")}
                    />
                    <button
                        type="button"
                        className={styles.customFileButton}
                        onClick={() => handleButtonClick(fotoEmbalajeRef)}
                    >
                        Seleccionar Archivo
                    </button>
                    <p style={{ fontSize: "10px", paddingTop: "2px" }}>
                        Accepted file types: jpg, jpeg, pdf, Max. file size: 10
                        MB.
                    </p>
                </div>

                <div className={styles.formField}>
                    <label>BOL o guía área en caso de contar con ella.</label>
                    <input
                        ref={bolGuiaRef}
                        type="file"
                        accept=".jpg,.jpeg,.pdf"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "bolGuia")}
                    />
                    <button
                        type="button"
                        className={styles.customFileButton}
                        onClick={() => handleButtonClick(bolGuiaRef)}
                    >
                        Seleccionar Archivo
                    </button>
                    <p style={{ fontSize: "10px", paddingTop: "2px" }}>
                        Accepted file types: jpg, jpeg, pdf, Max. file size: 10
                        MB.
                    </p>
                </div>

                {/* Buttons */}
                <div className="back-and-continue-button">
                    <div
                        className="secondary-button font-body"
                    >
                        Omitir
                    </div>
                    <button className="primary-button font-body" type="submit">
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DocumentationPortal;
