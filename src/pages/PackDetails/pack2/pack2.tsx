import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack2Details.module.css";
import icon from "../../../assets/icons/icon2.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack2Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const handleClick = () => {
        navigate("/information-portal");
    };
    
    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Comparativo aduanas", link: "/details2" },
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
                    COMPARATIVO ADUANAS
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Es un servicio de asesoría especializado en analizar y
                    comparar los procesos aduaneros de diferentes puntos de
                    entrada y salida en México. Este servicio está diseñado para
                    empresas que buscan optimizar sus operaciones actuales de
                    importación o exportación al seleccionar la aduana más
                    eficiente y rentable para sus necesidades específicas. A
                    través de un análisis detallado, te ayudamos a identificar
                    la aduana y proveedor que ofrece costos ideales,
                    transparentes y tiempos de despacho reales y mejores
                    condiciones para tus productos.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Análisis comparativo de diferentes aduanas en México
                        según los productos y necesidades del cliente.
                    </li>
                    <li>
                        Evaluación de tiempos de despacho, costos arancelarios y
                        requisitos documentales en cada aduana.
                    </li>
                    <li>
                        Recomendaciones basadas en el perfil y volumen de las
                        operaciones de comercio exterior del cliente.
                    </li>
                    <li>
                        Propuesta de estrategias para optimizar los procesos
                        aduaneros y reducir costos.
                    </li>
                    <li>
                        Tablas comparativas y gráficos que faciliten la
                        visualización de las ventajas y desventajas de cada
                        opción.
                    </li>
                    <li>
                        Informe detallado con un análisis comparativo de al
                        menos tres aduanas relevantes.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">
                            Ahorro en costos:
                        </span>{" "}
                        Identificación de la aduana con menores costos
                        operativos y arancelarios.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Reducción de tiempos:
                        </span>{" "}
                        Elección de la aduana con procesos más rápidos para
                        agilizar la liberación de mercancías.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Optimización de recursos:
                        </span>{" "}
                        Evita contratiempos y gastos innecesarios al seleccionar
                        la aduana más eficiente para tus operaciones.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Mejor toma de decisiones:
                        </span>{" "}
                        Información clara y comparativa que permite tomar
                        decisiones estratégicas informadas.
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

                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div className={styles.serviceTitle}>
                            Servicio Comparativo
                        </div>
                        <div className={styles.serviceDescription}>
                            Entregable de reporte comparativo y opinión de una
                            mejor práctica.
                        </div>
                    </div>
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
                            $8,500 + IVA
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

export default Pack2Details;
