import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { CardEditorForm, CardEditorFormProps } from 'components/cardEditorForm/cardEditorForm';
import styles from './cardEditor.module.scss';

interface CardEditorProps extends CardEditorFormProps {
    heading: string;
    onReturnClick: () => void;
}

export const CardEditor = ({
    buttons,
    card,
    heading,
    onReturnClick,
    onSubmit,
}: CardEditorProps) => {
    return (
        <div className={styles.wrapper}>
            <DashboardHeader heading={heading} onReturnClick={onReturnClick} />
            <CardEditorForm buttons={buttons} card={card} onSubmit={onSubmit} />
        </div>
    );
};
