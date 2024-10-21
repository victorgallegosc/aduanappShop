import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./InformationPortal.module.css"

const InformationPortal: React.FC = () => {
    const { packRoute } = useParams<{ packRoute: string }>();
    console.log({ packRoute });
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
        navigate(`/documentation-portal/${packRoute}`);
    };

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <h2>Informacion requerida*</h2>
                <div className={styles.containerHeaderMessage}>
                    <p className="font-body-bold">
                        ¡Ya casi, 2 pasos más y terminamos!
                    </p>
                </div>
            </div>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
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
                    <label>Teléfono*</label>
                    <input
                        name="telefono"
                        type="tel"
                        placeholder="xxx-xxx-xxxx"
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
                    <label>Tipo de aduana (opcional)</label>
                    <input
                        name="tipoDeAduana"
                        type="text"
                        placeholder="xxx-xxx-xxxx"
                        value={formData.tipoDeAduana}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formField}>
                    <label>Tipo de Servicio*</label>
                    <input
                        name="tipoDeServicio"
                        type="text"
                        placeholder="Importación o Exportación"
                        value={formData.tipoDeServicio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>País de Origen (opcional)</label>
                    <input
                        name="origen"
                        type="text"
                        placeholder="xxx-xxx-xxxx"
                        value={formData.origen}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formField}>
                    <label>Tipo de Persona (opcional)</label>
                    <input
                        name="persona"
                        type="text"
                        placeholder="Moral o Física"
                        value={formData.persona}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formField}>
                    <label>Código Arancelario (opcional)</label>
                    <input
                        name="codigo"
                        type="text"
                        placeholder="xxx-xxx-xxxx"
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
                    <button className="primary-button font-body" type="submit">
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InformationPortal;