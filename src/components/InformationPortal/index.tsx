import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InformationPortal.module.css"

const InformationPortal: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        apellido: "",
        telefono: "",
        rfc: "",
        tipoDeAduana: "",
        tipoDeServicio: "",
        origen: "",
        persona: "",
        codigo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Send data to API
        console.log("Form Data:", formData);
    };

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <div className={styles.containerHeaderMessage}>
                    <p className="font-body-bold">
                        ¡Ya casi, 2 pasos más y terminamos!
                    </p>
                </div>
            ) : ("")}
            <div className={styles.container}>
                {isMobile ? (
                    <form
                        className={styles.formContainerMbl}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formField}>
                            <h2>Informacion requerida*</h2>
                            <label>Nombre*</label>
                            <input
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>Apellido*</label>
                            <input
                                name="apellido"
                                type="text"
                                placeholder="Apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>Correo</label>
                            <input
                                name="correo"
                                type="email"
                                placeholder="Correo"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>Teléfono*</label>
                            <input
                                name="telefono"
                                type="tel"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>RFC*</label>
                            <input
                                name="rfc"
                                type="text"
                                placeholder="RFC"
                                value={formData.rfc}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>Tipo de Servicio*</label>
                            <div className={styles.border}>
                                <label style={{ fontFamily: "Public Sans Thin" }}>
                                    <input
                                        name="tipoDeServicio"
                                        type="radio"
                                        value="importacion"
                                        onChange={handleChange}
                                    />
                                    Importación
                                </label>
                                <label style={{ fontFamily: "Public Sans Thin" }}>
                                    <input
                                        name="tipoDeServicio"
                                        type="radio"
                                        value="exportacion"
                                        onChange={handleChange}
                                    />
                                    Exportación
                                </label>
                            </div>
                        </div>
                        <div className={styles.formField}>
                            <label>Tipo de Persona (opcional)</label>
                            <div className={styles.border}>
                                <label style={{ fontFamily: "Public Sans Thin" }}>
                                    <input
                                        name="persona"
                                        type="radio"
                                        value="fisica"
                                        onChange={handleChange}
                                    />
                                    Persona Física
                                </label>
                                <label style={{ fontFamily: "Public Sans Thin" }}>
                                    <input
                                        name="persona"
                                        type="radio"
                                        value="moral"
                                        onChange={handleChange}
                                    />
                                    Persona Moral
                                </label>
                            </div>
                        </div>
                        <div className={styles.formField}>
                            <label>Tipo de aduana (opcional)</label>
                            <input
                                name="tipoDeAduana"
                                type="text"
                                placeholder="Tipo de Aduana"
                                value={formData.tipoDeAduana}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>País de Origen (opcional)</label>
                            <input
                                name="origen"
                                type="text"
                                placeholder="País de Origen"
                                value={formData.origen}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label>Código Arancelario (opcional)</label>
                            <input
                                name="codigo"
                                type="text"
                                placeholder="Código Arancelario"
                                value={formData.codigo}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="back-and-continue-button">
                            <div
                                className="secondary-button font-body"
                                onClick={goBack}
                            >
                                Atrás
                            </div>
                            <button
                                className="primary-button font-body"
                                type="submit"
                            >
                                Continuar
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className={styles.containerHeader}>
                            <h2>Informacion requerida*</h2>
                            <div className={styles.containerHeaderMessage}>
                                <p className="font-body-bold">
                                    ¡Ya casi, 2 pasos más y terminamos!
                                </p>
                            </div>
                        </div>
                        <form
                            className={styles.formContainer}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.formField}>
                                <label>Nombre*</label>
                                <input
                                    name="nombre"
                                    type="text"
                                    placeholder="Nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Apellido*</label>
                                <input
                                    name="apellido"
                                    type="text"
                                    placeholder="Apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Correo</label>
                                <input
                                    name="correo"
                                    type="email"
                                    placeholder="Correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Teléfono*</label>
                                <input
                                    name="telefono"
                                    type="tel"
                                    placeholder="Teléfono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>RFC*</label>
                                <input
                                    name="rfc"
                                    type="text"
                                    placeholder="RFC"
                                    value={formData.rfc}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Tipo de Servicio*</label>
                                <div className={styles.border}>
                                    <label style={{ fontFamily: "Public Sans Thin" }}>
                                        <input
                                            name="tipoDeServicio"
                                            type="radio"
                                            value="importacion"
                                            onChange={handleChange}
                                        />
                                        Importación
                                    </label>
                                    <label style={{ fontFamily: "Public Sans Thin" }}>
                                        <input
                                            name="tipoDeServicio"
                                            type="radio"
                                            value="exportacion"
                                            onChange={handleChange}
                                        />
                                        Exportación
                                    </label>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <label>Tipo de Persona (opcional)</label>
                                <div className={styles.border}>
                                    <label style={{ fontFamily: "Public Sans Thin" }}>
                                        <input
                                            name="persona"
                                            type="radio"
                                            value="fisica"
                                            onChange={handleChange}
                                        />
                                        Persona Física
                                    </label>
                                    <label style={{ fontFamily: "Public Sans Thin" }}>
                                        <input
                                            name="persona"
                                            type="radio"
                                            value="moral"
                                            onChange={handleChange}
                                        />
                                        Persona Moral
                                    </label>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <label>Tipo de aduana (opcional)</label>
                                <input
                                    name="tipoDeAduana"
                                    type="text"
                                    placeholder="Tipo de Aduana"
                                    value={formData.tipoDeAduana}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>País de Origen (opcional)</label>
                                <input
                                    name="origen"
                                    type="text"
                                    placeholder="País de Origen"
                                    value={formData.origen}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Código Arancelario (opcional)</label>
                                <input
                                    name="codigo"
                                    type="text"
                                    placeholder="Código Arancelario"
                                    value={formData.codigo}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="back-and-continue-button">
                                <div
                                    className="secondary-button font-body"
                                    onClick={goBack}
                                >
                                    Atrás
                                </div>
                                <button
                                    className="primary-button font-body"
                                    type="submit"
                                >
                                    Continuar
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}

export default InformationPortal;