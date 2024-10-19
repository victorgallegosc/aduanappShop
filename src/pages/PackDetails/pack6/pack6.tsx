import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack6Details.module.css";
import icon from "../../../assets/icons/icon6.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack6Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // --- Tables data ---
    // Basic Services
    const basicServices = [
        {
            title: "Fracción arancelaria",
            description: "Análisis y criterio legal de soporte con RRNA´S",
        },
    ];

    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        {
            label: "Emprende y haz un análisis de tu fracción arancelaria",
            link: "/details6",
        },
    ];

    return (
        <>
            {/* Image and icon */}
            <div className={styles.imageDiv}>
                <div className={styles.iconDiv}>
                    <img src={icon} style={{ width: "150px" }}></img>
                </div>
                <div className={styles.colorBar}></div>
            </div>

            {/* Breadcrumb Bar */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Service Information */}
            <div className={styles.container}>
                <h1 className="font-title" style={{ marginBottom: "10px" }}>
                    EMPRENDE Y HAZ UN ANÁLISIS DE TU FRACCIÓN ARANCELARIA
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Validar aplicación, criterio de uso y función encontrando el
                    criterio correcto. Es un servicio especializado que te ayuda
                    a identificar la fracción arancelaria correcta para tus
                    productos. Nuestro equipo de expertos te asesora para
                    garantizar que tus mercancías estén correctamente
                    clasificadas, optimizando costos y facilitando el proceso
                    aduanero.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Estudio detallado de las características de tus
                        productos para determinar la fracción arancelaria
                        adecuada.
                    </li>
                    <li>
                        Revisión y validación de la clasificación actual de tus
                        productos para detectar posibles errores.
                    </li>
                    <li>
                        Análisis de implicaciones fiscales y regulatorias
                        basadas en la fracción arancelaria asignada.
                    </li>
                    <li>
                        Asesoría sobre los requisitos específicos asociados a la
                        fracción arancelaria, como permisos, cuotas o
                        restricciones.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">
                            Cumplimiento normativo:
                        </span>{" "}
                        Con nuestra guía, minimizarás errores que podrían
                        retrasar o encarecer tu primera exportación.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Optimización de costos:
                        </span>{" "}
                        Al recibir apoyo en cada etapa, el proceso será más
                        rápido y eficiente.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Reducción de riesgos:
                        </span>{" "}
                        Te asegurarás de cumplir con todas las regulaciones
                        aduaneras, evitando sanciones o complicaciones legales.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Eficiencia operativa:
                        </span>{" "}
                        Adquirirás el conocimiento y la experiencia necesarios
                        para futuras exportaciones, estableciendo una base
                        sólida para expandir tu negocio internacionalmente.
                    </li>
                </ul>

                <h2>Condiciones de pago</h2>
                <p style={{ marginBottom: "30px" }}>
                    Elaboración de cuenta de rubros utilizados o check de
                    conceptos al momento de ejecutar la operación.
                </p>

                <h2>Entregables</h2>
                {/* Services Table */}
                <div style={{ marginBottom: "50px" }}>
                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div
                            className={[
                                styles.serviceTitle,
                                "font-body-bold",
                            ].join(" ")}
                            style={{
                                borderBottom: "1px solid #ff4407",
                                paddingBottom: "5px",
                            }}
                        >
                            Servicios Estandar
                        </div>
                        <div
                            className={[
                                styles.serviceDescription,
                                "font-body-bold",
                            ].join(" ")}
                            style={{ borderBottom: "1px solid #ff4407" }}
                        >
                            Descripción
                        </div>
                    </div>
                    {basicServices.map((service, index) => (
                        <div
                            key={index}
                            className={[styles.serviceItem, "font-body"].join(
                                " "
                            )}
                        >
                            <div className={styles.serviceTitle}>
                                {service.title}
                            </div>
                            <div className={styles.serviceDescription}>
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total Payment */}
                <div style={{ marginBottom: "50px" }}>
                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div
                            className="font-body-bold"
                            style={{
                                borderBottom: "1px solid #ff4407",
                                paddingBottom: "5px",
                                width: "100%",
                            }}
                        >
                            Pago total solicitado
                        </div>
                    </div>

                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div className={styles.serviceTitle}>Servicios</div>
                        <div
                            className={[
                                styles.serviceDescription,
                                "font-body-bold",
                            ].join(" ")}
                        >
                            $1,700 + IVA
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="back-and-continue-button">
                    <div
                        className="secondary-button font-body"
                        onClick={goBack}
                    >
                        Atrás
                    </div>
                    <div className="primary-button font-body">Continuar</div>
                </div>
            </div>
        </>
    );
};

export default Pack6Details;
