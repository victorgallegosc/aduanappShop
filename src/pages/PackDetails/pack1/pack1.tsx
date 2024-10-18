import React from "react";
import styles from "./Pack1Details.module.css"
import icon from "../../../assets/icons/icon1.svg"
import Breadcrumb from "../../../components/BreadcrumbBar";

// En este componente, aparece una linea blanca de 1px entre el Header y este componente

const Pack1Details: React.FC = () => {
    const breadcrumbItems = [
        { label: "Home", link: "http://www.aduanapp.com" },
        { label: "Shop", link: "/" },
        { label: "Mi Primera Importacion", link: "/details1" },
    ];

    const basicServices = [
        {
            title: "Padrón de importadores",
            description:
                "Guía gestión y coordinación con equipo contable de su alta con agente aduanal en caso de que de manera individual no lo puedan realizar.",
        },
        {
            title: "Opinión Positiva",
            description:
                "Guía gestión y coordinación con equipo contable en caso de no contar con la op positiva al momento de la alta del padrón.",
        },
        {
            title: "Localización proveedor",
            description:
                "En caso de no contar con uno o querer mejorar oferta se localizara un proveedor similar al deseado.",
        },
        {
            title: "Coordinación operativa",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW, naviera, transporte o aerolínea como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal.",
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
            title: "Contacto con proveedores",
            description:
                "En caso de falta de información para operación, se establece comunicación directa con proveedor y embarcador.",
        },
        {
            title: "Llenado de formatos (carta porte, guías, etc.)",
            description:
                "Creación de documento de operación en caso de no contar con el mismo como complemento carta porte o complemento comercio exterior, guía exportación.",
        },
        {
            title: "Coordinación entrega",
            description:
                "Logística de coordinación y entrega de aduana a destino y entrega de contenedor vacío.",
        },
        {
            title: "Guía entrega última milla",
            description:
                "Logística de coordinación y entrega de aduana a destino y entrega de contenedor vacío.",
        },
        {
            title: "Llenado de complemento carta porte",
            description: "Llenado de información de catálogo de SAT.",
        },
    ];

    const additionalServices = [
        {
            title: "*Padrón sectorial",
            description:
                "Guía gestión y coordinación con equipo contable de su alta con agente aduanal en caso de que de manera individual no lo puedan realizar.",
        },
        {
            title: "*Coordinación FFW",
            description:
                "Coordinación y gestión de operación de actividades relacionadas a FFW como pagos garantía, revalidación, desconsolidación, maniobras fuera de los de despacho aduanal.",
        },
        {
            title: "*Reactivación padrón",
            description:
                "Guía gestión y coordinación con equipo contable en caso de no contar con ella al momento de la alta del padrón.",
        },
        {
            title: "*Coordinación comercial",
            description:
                "Gestión de la documentación y recomendaciones para mejorar futuras operaciones comerciales.",
        },
        {
            title: "*Gestión naviera",
            description:
                "Revisión, comunicación y gestión cuando naviera permita en caso de no ser consignatarios o representate directo para disputas , retornos de vacío, garantías.",
        },
    ];

    return (
        <>
            <div className={styles.imageDiv}>
                <div className={styles.iconDiv}>
                    <img src={icon} style={{ width: "150px" }}></img>
                </div>
            </div>

            <Breadcrumb items={breadcrumbItems} />

            <div className={styles.container}>
                <h1 className="font-title" style={{ marginBottom: "10px" }}>
                    MI PRIMERA IMPORTACIÓN
                </h1>
                <p
                    style={{
                        paddingBottom: "20px",
                        borderBottom: "1px solid #ff4407",
                    }}
                >
                    Diseñado para empresas y emprendedores que están realizando
                    su primera importación a México. Este paquete te guiará paso
                    a paso a lo largo del proceso, desde la selección del
                    proveedor en el extranjero hasta la entrega final en tu
                    almacén, asegurando que todo cumpla con las regulaciones
                    aduaneras mexicanas. Nos enfocamos en brindarte la
                    tranquilidad de que tu primera experiencia sea exitosa,
                    minimizando riesgos y costos inesperados de acuerdo al
                    incoterm de la operación teniendo el alcance claro del
                    proveedor de origen, tu como importador y los gastos
                    relacionados logísticos denominados comprobados de terceros.
                </p>

                <h2>Descripcion de entregables</h2>
                <ul>
                    <li>
                        Asesoría en la selección de proveedores internacionales
                        y revisión de contratos de compra.
                    </li>
                    <li>
                        Evaluación de la clasificación arancelaria de tus
                        productos para asegurar el correcto pago de impuestos.
                    </li>
                    <li>
                        Orientación en la obtención de permisos y licencias
                        necesarias para la importación.
                    </li>
                    <li>
                        Coordinación con agentes aduanales y transportistas para
                        la logística de importación.
                    </li>
                    <li>
                        Monitoreo y seguimiento del despacho aduanal para
                        garantizar una liberación oportuna.
                    </li>
                    <li>
                        Capacitación básica sobre las obligaciones y derechos
                        del importador.
                    </li>
                    <li>Minimizando los gastos variables.</li>
                </ul>

                {/* En esta lista, cambiar <strong> por una fuente bold */}
                <h2>Beneficios</h2>
                <ul>
                    <li>
                        <strong> Reducción de Riesgos:</strong> Evita multas,
                        demoras o confiscaciones al cumplir con todas las
                        normativas aduaneras desde el inicio.
                    </li>
                    <li>
                        <strong>Optimización de Costos:</strong> Asegura el pago
                        correcto de impuestos y evita sobrecostos logísticos
                        innecesarios.
                    </li>
                    <li>
                        <strong>Tranquilidad:</strong> Confía en que tu primera
                        importación será manejada por expertos, lo que te
                        permite enfocarte en otras áreas de tu negocio.
                    </li>
                    <li>
                        <strong>Aprendizaje:</strong> Adquiere conocimientos
                        fundamentales sobre importaciones que te servirán para
                        futuras operaciones.
                    </li>
                </ul>

                <h2>Condiciones de pago</h2>
                <p style={{ marginBottom: "30px" }}>
                    Elaboración de cuenta de rubros utilizados o check de
                    conceptos al momento de ejecutar la operación.
                </p>

                <h2>Entregables</h2>
                <div style={{ marginBottom: "50px" }}>
                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div
                            className={styles.serviceTitle}
                            style={{
                                borderBottom: "1px solid #ff4407",
                                paddingBottom: "5px",
                            }}
                        >
                            Servicios Estandar
                        </div>
                        <div
                            className={styles.serviceDescription}
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

                <div style={{ marginBottom: "50px" }}>
                    <div
                        className={[styles.serviceItem, "font-body"].join(" ")}
                    >
                        <div
                            className={styles.serviceTitle}
                            style={{
                                borderBottom: "1px solid #ff4407",
                                paddingBottom: "5px",
                            }}
                        >
                            Servicios Adicionales
                        </div>
                        <div
                            className={styles.serviceDescription}
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
            </div>
        </>
    );
}

export default Pack1Details;