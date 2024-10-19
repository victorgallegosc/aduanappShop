import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack5Details.module.css";
import icon from "../../../assets/icons/icon5.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack5Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const handleClick = () => {
        navigate("/information-portal");
    };

    // --- Tables data ---
    // Basic Services
    const basicServices = [
        {
            title: "Coordinación op",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW, naviera, transporte o aerolínea como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal.",
        },
        {
            title: "Padrón sectorial exportadores",
            description:
                "Guía gestión y coordinación con equipo contable de su alta con agente aduanal en caso de que de manera individual no lo puedan realizar en sector específico.",
        },
        {
            title: "Creacion doc",
            description:
                "Creación de documento de operación en caso de no contar con el mismo.",
        },
        {
            title: "Fracción arancelaria",
            description:
                "Gestión y criterio en caso de no contar con fracción sugerida.",
        },
        {
            title: "Ajuste documentos para realizar operación",
            description:
                "Creación, corrección de documentos en caso de ser necesario para ejecutar operación.",
        },
        {
            title: "Creación de documentos operativos",
            description:
                "Creación de documento de operación en caso de no contar con el mismo.",
        },
        {
            title: "Fracción arancelaria",
            description:
                "Gestión y criterio en caso de no contar con fracción sugerida.",
        },
        {
            title: "Llenado CCP",
            description: "Llenado de información de catalogo SAT.",
        },
    ];

    // Additional Services
    const additionalServices = [
        {
            title: "Opinión positiva*",
            description:
                "Guía gestión y coordinación con equipo contable en caso de no contar con la opinión positiva al momento de la alta del padrón.",
        },
        {
            title: "Gestión naviera*",
            description:
                "Disputa de saldos, devolución de garantía o aclaración de daños..",
        },
    ];
    
    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Mi Primera Exportación", link: "/details5" },
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
                    MI PRIMERA EXPORTACIÓN
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Es un servicio de asesoría completo diseñado para empresas
                    que están dando sus primeros pasos en el comercio
                    internacional. Este servicio ofrece una guía paso a paso
                    para realizar tu primera exportación, desde la preparación
                    de la documentación hasta la coordinación logística y el
                    cumplimiento de todas las regulaciones aduaneras. Nuestro
                    objetivo es asegurarnos de que tu primera exportación sea un
                    proceso fluido, exitoso y libre de complicaciones,
                    brindándote la confianza y el conocimiento necesario para
                    expandir tu negocio a mercados internacionales.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Asesoría personalizada para entender el proceso de
                        exportación y las regulaciones aduaneras aplicables.
                    </li>
                    <li>
                        Ayuda en la preparación de toda la documentación
                        necesaria para la exportación, incluyendo facturas
                        comerciales, certificados de origen y permisos.
                    </li>
                    <li>
                        Orientación en la selección de la mejor ruta y medio de
                        transporte para tu mercancía.
                    </li>
                    <li>
                        Coordinación con agentes aduanales y proveedores
                        logísticos para garantizar un despacho sin
                        contratiempos.
                    </li>
                    <li>
                        Capacitación básica en comercio internacional y aduanas
                        para el equipo de la empresa.
                    </li>
                    <li>
                        Descripción general de entregables: Guía personalizada
                        paso a paso sobre cómo realizar tu primera exportación.
                    </li>
                    <li>
                        Checklists y formatos para preparar la documentación de
                        exportación.
                    </li>
                    <li>
                        Informe de recomendaciones sobre la logística y la
                        elección del transporte.
                    </li>
                    <li>
                        Soporte continuo durante todo el proceso de exportación,
                        desde la preparación hasta la entrega final.
                    </li>
                    <li>
                        Reporte final con análisis del proceso y sugerencias
                        para futuras exportaciones.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">
                            Evita errores comunes:{" "}
                        </span>
                        Con nuestra guía, minimizarás errores que podrían
                        retrasar o encarecer tu primera exportación.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Ahorro de tiempo:{" "}
                        </span>
                        Al recibir apoyo en cada etapa, el proceso será más
                        rápido y eficiente.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Cumplimiento normativo:
                        </span>{" "}
                        Te asegurarás de cumplir con todas las regulaciones
                        aduaneras, evitando sanciones o complicaciones legales.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Confianza y conocimiento:
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
                {/* Standard Services Table */}
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

                {/* Additional Services Table */}
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
                            Servicios Adicionales
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
                    {additionalServices.map((service, index) => (
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

                {/* Minimum Payment */}
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
                            Pago mínimo solicitado
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
                            $9,150 + IVA
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
                    <div
                        className="primary-button font-body"
                        onClick={handleClick}
                    >
                        Continuar
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pack5Details;
