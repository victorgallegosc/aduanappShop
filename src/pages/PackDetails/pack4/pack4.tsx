import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack4Details.module.css";
import icon from "../../../assets/icons/icon4.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack4Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    const handleClick = () => {
        navigate("/schedule-meeting", {
            state: {
                url: "https://calendly.com/carrotibc/carrot-ibc-introduction",
            },
        });
    };

    // --- Table data ---
    const services = [
        {
            title: "Coordinación op",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW, naviera, transporte o aerolínea como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal.",
        },
        {
            title: "Coordinación comer",
            description: "Introducción a proveedor y negociación.",
        },
        {
            title: "Llenado de formatos",
            description:
                "Creación de documento de operación en caso de no contar con el mismo como complemento carta porte o complemento comercio exterior, guía exportación.",
        },
        {
            title: "Llenado CCP",
            description: "Llenado de información de catalogo SAT.",
        },
        {
            title: "Gestión naviera",
            description:
                "Disputa de saldos, devolución de garantía o aclaración de daños.",
        },
    ];

    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Coordinación de operaciones", link: "/details4" },
    ];

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
            {/* Image and icon */}
            <div className={styles.imageDiv}>
                <div className={styles.iconDiv}>
                    {isMobile ? (
                        <img src={icon} style={{ width: "100px" }}></img>
                    ) : (
                        <img src={icon} style={{ width: "150px" }}></img>
                    )}
                </div>
                {!isMobile ? <div className={styles.colorBar}></div> : ""}
            </div>

            {/* Breadcrumb Bar */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Service Information */}
            <div className={styles.container}>
                <h1 className={["font-title", styles.title].join(" ")}>
                    COORDINACIÓN DE OPERACIONES
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #6b9ac4",
                    }}
                >
                    Es un servicio integral que se enfoca en garantizar que los
                    proveedores cumplan con los estándares de calidad, así como
                    con los requisitos operativos y administrativos necesarios
                    para las operaciones aduaneras. Este servicio proporciona un
                    monitoreo constante y una auditoría regular para asegurar
                    que los proveedores seleccionados mantengan un desempeño
                    óptimo en todas las etapas del proceso de importación o
                    exportación, desde la producción hasta el cumplimiento de
                    las normativas aduaneras.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Evaluación inicial de los estándares de calidad y los
                        procesos operativos y administrativos de los proveedores
                        seleccionados.
                    </li>
                    <li>
                        Implementación de un sistema de seguimiento continuo
                        para monitorear el desempeño de los proveedores en
                        relación con las normativas aduaneras.
                    </li>
                    <li>
                        Auditorías periódicas para verificar el cumplimiento de
                        los estándares de calidad y requisitos operativos.
                    </li>
                    <li>
                        Informes regulares que detallan el rendimiento de los
                        proveedores, identificando áreas de mejora y asegurando
                        el cumplimiento constante.
                    </li>
                    <li>
                        Asesoría y recomendaciones para mejorar la eficiencia y
                        la calidad en la cadena de suministro.
                    </li>
                    <li>
                        Informe de evaluación inicial con un diagnóstico
                        completo de los proveedores seleccionados.
                    </li>
                    <li>
                        Sistema de seguimiento personalizado que permite
                        monitorear la calidad y el cumplimiento en tiempo real.
                    </li>
                    <li>
                        Reportes periódicos de auditoría, incluyendo métricas de
                        rendimiento y recomendaciones de mejora.
                    </li>
                    <li>
                        Manual de estándares de calidad y procedimientos
                        operativos, adaptado a las necesidades específicas de la
                        empresa.
                    </li>
                    <li>
                        Plan de acción para implementar mejoras con los
                        proveedores, con plazos y responsables asignados.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">Mejora continua:</span>{" "}
                        Garantiza que los proveedores mantengan altos estándares
                        de calidad, lo que se traduce en productos finales de
                        mayor calidad.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Reducción de riesgos:
                        </span>{" "}
                        Minimiza los riesgos de incumplimiento normativo y
                        errores en la cadena de suministro, evitando costos
                        adicionales y sanciones.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Eficiencia operativa:
                        </span>{" "}
                        Un seguimiento constante asegura que los procesos se
                        realicen de manera más eficiente, reduciendo tiempos y
                        costos operativos.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Confianza y seguridad:
                        </span>{" "}
                        Proporciona a la empresa la tranquilidad de saber que
                        sus proveedores cumplen con todas las normativas y
                        estándares requeridos.
                    </li>
                </ul>

                <h2>Condiciones de pago</h2>
                <p style={{ marginBottom: "30px" }}>
                    Elaboración de cuenta de rubros utilizados o check de
                    conceptos al momento de ejecutar la operación.
                </p>

                <h2>Entregables</h2>
                {/* Services table */}
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
                    {services.map((service, index) => (
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
                            $8,400 + IVA
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

export default Pack4Details;
