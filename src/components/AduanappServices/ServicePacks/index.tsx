import React from "react";
import styles from './ServicePacks.module.css'
import ServicePack from "./ServicePack";

const ServicePacks: React.FC = () => {
    return (
        <div className={styles.servicePacksContainer}>
            <ServicePack
                borderColor="#212121"
                icon="1"
                text="Mi Primera Importación"
                price="6,840"
                packNumber={1}
            />
            <ServicePack
                borderColor="#48a9a6"
                icon="2"
                text="Comparativo Aduanas"
                price="8,500"
                packNumber={2}
            />
            <ServicePack
                borderColor="#ff9900"
                icon="3"
                text="Conectandote"
                price="12,300"
                packNumber={3}
            />
            <ServicePack
                borderColor="#6b9ac4"
                icon="4"
                text="Coordinación Operaciones"
                price="12,300"
                packNumber={4}
            />
            <ServicePack
                borderColor="#5da271"
                icon="5"
                text="Mi Primera Exportación"
                price="9,150"
                packNumber={5}
            />
            <ServicePack
                borderColor="#731dd8"
                icon="6"
                text="Emprende y haz un Análisis de tu Fracción Arancelaria"
                price="9,150"
                packNumber={6}
            />
            <ServicePack
                borderColor="#22333b"
                icon="7"
                text="Proveedores Cruzados: Garantía de Cumplimiento"
                price="4,800"
                packNumber={7}
            />
            <ServicePack
                borderColor="#b497d6"
                icon="8"
                text="Acercate a Mercado Actualizado"
                price="3,600"
                packNumber={8}
            />
        </div>
    );
};

export default ServicePacks;