import styles from './card.module.scss';

interface CardProps {
    title: string;
    onClick: (value: string) => void;
}

export const Card = ({ title, onClick }: CardProps) => {
    return (
        <button className={styles.wrapper} onClick={() => onClick(title)}>
            <span className={styles.title}>{title}</span>
        </button>
    );
};
