import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pack3Details.module.css";
import icon from "../../../assets/icons/icon3.svg";
import Breadcrumb from "../../../components/BreadcrumbBar";

const Pack3Details: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // --- Table data ---
    const services = [
        {
            title: "Coordinación FFM",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal..",
        },
        {
            title: "Ajuste documentos",
            description:
                "Creación, correción de documentos en caso de ser necesario para ejecutar operación.",
        },
        {
            title: "Creación documento",
            description:
                "Creación de documento de operación en caso de no contar con el mismo.",
        },
        {
            title: "Fracción arancelaria",
            description:
                "Gestión y criterio en caso de no contar con fracción sugerida.",
        },
        {
            title: "Llenado de formatos",
            description:
                "Creación de documento de operación en caso de no contar con el mismo como complemento carta porte o complemento comercio exterior, guía exportación.",
        },
        {
            title: "Coordinación OP",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW, naviera, transporte o aerolínea como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal.",
        },
        {
            title: "Coordinación entrega",
            description:
                "Logística de coordinación y entrega de aduana a destino y entrega de contedor vacío.",
        },
        {
            title: "Llenada CCP",
            description: "Llenado de información de catalogo SAT..",
        },
        {
            title: "Gestión naviera",
            description:
                "Revisión, comunicación y gestión cuando naviera permita en caso de no ser consignatarios o representante directo para disputas, retornos de vacío, garantías.",
        }
    ];

    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Conectándote", link: "/details3" },
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
                    CONECTÁNDOTE
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Es un servicio de consultoría diseñado para ayudar a las
                    empresas a coordinar y optimizar las operaciones aduaneras
                    con sus proveedores internacionales. Este servicio se enfoca
                    en establecer procesos integrados y eficientes que aseguren
                    una cadena de suministro fluida, minimizando riesgos y
                    retrasos en la aduana. Asesoramos en la sincronización de la
                    documentación, el cumplimiento de regulaciones, y la
                    optimización de tiempos de entrega, garantizando que las
                    operaciones de importación o exportación se realicen sin
                    contratiempos.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Evaluación de la cadena de suministro y los procesos
                        aduaneros actuales en coordinación con los proveedores.
                    </li>
                    <li>
                        Desarrollo de un plan de integración aduanera que
                        incluya procesos y estándares claros para proveedores
                        internacionales.
                    </li>
                    <li>
                        Capacitación y asesoramiento continuo para los
                        proveedores en temas de documentación y regulaciones
                        aduaneras mexicanas.
                    </li>
                    <li>
                        Supervisión y seguimiento para asegurar el cumplimiento
                        y la eficacia de las integraciones implementadas.
                    </li>
                    <li>
                        Informe detallado de la evaluación inicial con
                        recomendaciones específicas para la integración.
                    </li>
                    <li>
                        Manual de procedimientos aduaneros para proveedores,
                        adaptado a las necesidades de la empresa.
                    </li>
                    <li>
                        Herramientas y formatos estandarizados para la
                        documentación aduanera.
                    </li>
                    <li>
                        Plan de acción para la implementación de la integración,
                        con un cronograma claro y responsables asignados.
                    </li>
                    <li>
                        Reportes de seguimiento y ajustes continuos según la
                        evolución de las operaciones.
                    </li>
                </ul>

                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <span className="font-body-bold">
                            Reducción de errores:
                        </span>{" "}
                        Menos errores en la documentación aduanera gracias a una
                        mejor comunicación y coordinación con los proveedores
                        ideal.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Agilización de procesos:
                        </span>{" "}
                        Procesos aduaneros más rápidos y eficientes, lo que
                        reduce tiempos de entrega y costos de almacenamiento
                        porque es experto en vertical.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Cumplimiento normativo:
                        </span>{" "}
                        Asegura que los proveedores cumplan con todas las
                        regulaciones aduaneras, evitando sanciones y retrasos.
                    </li>
                    <li>
                        <span className="font-body-bold">
                            Mejora en la relación con proveedores:
                        </span>{" "}
                        Relación más fuerte y colaborativa con los proveedores,
                        lo que puede traducirse en mejores condiciones
                        comerciales. Aprovechando sus valores agregados no
                        importa tu volumen.
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
                        className={[styles.serviceItem, "font-body"].join(
                            " "
                        )}
                    >
                        <div className={styles.serviceTitle}>
                            Servicios
                        </div>
                        <div
                            className={[
                                styles.serviceDescription,
                                "font-body-bold",
                            ].join(" ")}
                        >
                            $12,300 + IVA
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

export default Pack3Details;
