import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { CardEditorForm, CardEditorFormProps } from 'components/cardEditorForm/cardEditorForm';
import styles from './cardEditor.module.scss';

interface CardEditorProps extends CardEditorFormProps {
    heading: string;
}

export const CardEditor = ({ buttons, heading, onSubmit }: CardEditorProps) => {
    return (
        <div className={styles.wrapper}>
            <DashboardHeader heading={heading} />
            <CardEditorForm buttons={buttons} onSubmit={onSubmit} />
        </div>
    );
};
