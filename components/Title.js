import styles from "@/styles/Title.module.css";

export default function Title({ title, subtitle }) {
    return (
        <>
            <h5 className={styles.subtitle}>{title}</h5>
            <h2 className={styles.title}>{subtitle}</h2>
        </>

    )
}

Title.defaultProps = {
    title: 'Titulo Default',
    subtitle: 'Subtitulo Default'
}