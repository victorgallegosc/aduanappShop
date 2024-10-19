import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack7Details.module.css";
import icon from "../../../assets/icons/icon7.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack7Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // --- Tables data ---
    //Basic Services
    const basicServices = [
        {
            title: "Consulta proveedor",
            description:
                "En caso de no contar con uno o querer mejorar oferta se localizara un proveedor similar al deseado y negociación de acuerdos claves.",
        },
        {
            title: "Llenado de formatos",
            description:
                "Creación de documento de operación en caso de no contar con el mismo como complemento carta porte o complemento comercio exterior, guía exportación.",
        },
        {
            title: "Ajuste documentos",
            description:
                "Creación, corrección de documentos en caso de ser necesario para ejecutar operación.",
        }
    ];

    // Additional Services
    const additionalServices = [
        {
            title: "Coordinación entrega*",
            description:
                "Logística de coordinación y entrega de aduana a destino y entrega de contedor vacío.",
        }
    ];

    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Proveedores cruzados: garantía de cumplimiento", link: "/details7" },
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
                    PROVEEDORES CRUZADOS: GARANTÍA DE CUMPLIMIENTO
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Es un servicio especializado en coordinar y asegurar que con
                    nuestros propios proveedores de venta cruzada se cumplan con
                    expectativas y necesidades de tus embarques garantizando que
                    tus embarques se gestionen de manera eficiente y conforme a
                    las regulaciones aplicables.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Análisis de problemática actual e introducción a nuevo
                        proveedor con solución en proceso aduanero o logístico
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        Validar servicio recibido actual y garantizar una mejora
                        en base a las necesidades expuestas de la problemática.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Optimización de procesos:
                        </span>{" "}
                        Mejora la eficiencia de tu cadena de suministro al
                        asegurar la calidad y cumplimiento desde la fuente.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Reducción de riesgos:
                        </span>{" "}
                        Minimiza los riesgos de retrasos, sanciones o problemas
                        aduaneros por incumplimiento de proveedores.
                    </li>
                    <li>
                        <span className="font-body-bold">Mayor control:</span>{" "}
                        Mantén un control estricto sobre los proveedores
                        externos, asegurando un desempeño constante y confiable.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Cumplimiento asegurado:
                        </span>{" "}
                        Garantiza que tus proveedores externos cumplan con todas
                        las normativas y expectativas.
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
                            Servicios
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
                            $4,800 + IVA
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

export default Pack7Details;
