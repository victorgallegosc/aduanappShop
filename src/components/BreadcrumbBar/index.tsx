import React, { useEffect, useState } from "react";
import styles from "./BreadcrumbBar.module.css";

const Breadcrumb: React.FC<{ items: { label: string; link: string }[] }> = ({
    items,
}) => {

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
        <nav className={styles.breadcrumb}>
            {items.map((item, index) => (
                <span key={index} style={{minWidth: "55px"}}>
                    {isMobile ? (
                        <a
                            href={item.link}
                            className={[
                                "font-body",
                                styles.breadcrumbItem,
                                index === items.length - 1 ? styles.active : "",
                            ].join(" ")}
                            style={{ fontSize: "13px" }}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <a
                            href={item.link}
                            className={[
                                "font-body",
                                styles.breadcrumbItem,
                                index === items.length - 1 ? styles.active : "",
                            ].join(" ")}
                            style={{ fontSize: "18px" }}
                        >
                            {item.label}
                        </a>
                    )}
                    {index < items.length - 1 && (
                        <span className={styles.separator}> / </span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
