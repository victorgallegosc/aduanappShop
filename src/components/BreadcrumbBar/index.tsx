import React from "react";
import styles from "./BreadcrumbBar.module.css";

const Breadcrumb: React.FC<{ items: { label: string; link: string }[] }> = ({
    items,
}) => {
    return (
        <nav className={styles.breadcrumb}>
            {items.map((item, index) => (
                <span key={index}>
                    <a
                        href={item.link}
                        className={[
                            "font-body",
                            styles.breadcrumbItem,
                            index === items.length - 1 ? styles.active : "",
                        ].join(" ")} style={{fontSize: "18px"}}
                    >
                        {item.label}
                    </a>
                    {index < items.length - 1 && (
                        <span className={styles.separator}> / </span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
