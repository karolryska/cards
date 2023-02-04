import styles from './card.module.scss';

export type OnCardClick = (id: string, collectionName: string) => void;

interface CardProps {
    id: string;
    title: string;
    onClick: OnCardClick;
}

export const Card = ({ id, title, onClick }: CardProps) => {
    return (
        <button className={styles.wrapper} data-testid="card" onClick={() => onClick(id, title)}>
            <span className={styles.title}>{title}</span>
        </button>
    );
};
