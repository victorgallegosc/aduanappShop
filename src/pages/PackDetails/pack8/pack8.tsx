import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack8Details.module.css";
import icon from "../../../assets/icons/icon8.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack8Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // --- Tables data ---
    // Basic Services
    const basicServices = [
        {
            title: "Introducción a aerolínea",
            description: "Introducción a proveedor",
        },
        {
            title: "Introducción a FFW",
            description: "Introducción a proveedor",
        },
        {
            title: "Introducción a AA",
            description: "Introducción a proveedor",
        },
        {
            title: "Introducción con comercializadora",
            description: "Introducción a proveedor",
        },
        {
            title: "Introducción con terminal de carga",
            description: "Introducción a proveedor",
        }
    ];
    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        {
            label: "Acercate a mercado actualizado",
            link: "/details8",
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
                    ACERCATE A MERCADO ACTUALIZADO
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Por vertical y RFC analizamos proveedores ideales en
                    transporte y aduana, es un servicio que facilita la conexión
                    y negociación con proveedores clave en el ámbito
                    internacional. Nuestro equipo te apoya en la identificación,
                    evaluación y selección de proveedores que se alineen con las
                    necesidades de tu negocio, garantizando calidad,
                    cumplimiento de normativas, y términos comerciales
                    favorables. Este servicio es ideal para empresas que buscan
                    expandir su red de proveedores de manera eficiente y
                    estratégica.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Darle la mejor opción a cliente basado en sus
                        necesidades.
                    </li>
                    <li>
                        Entender nuevas tendencias, oferta y precios por valor
                        agregado de cada proveedor.
                    </li>
                    <li>
                        Facilitación de la comunicación y coordinación inicial
                        con los proveedores seleccionados.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">
                            Conocer nuevas tendencias de proveeduría.
                        </span>
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Mejores condiciones:
                        </span>{" "}
                        Negocia términos comerciales favorables que beneficien
                        tu cadena de suministro.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Reducción de riesgos:
                        </span>{" "}
                        Minimiza riesgos asociados a proveedores no confiables o
                        incumplimientos.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Eficiencia en la expansión:
                        </span>{" "}
                        Expande tu red de proveedores de manera rápida y
                        efectiva.
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
                            $3,600 + IVA
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

export default Pack8Details;
