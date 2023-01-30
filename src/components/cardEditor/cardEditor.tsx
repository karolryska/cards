import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { CardEditorForm, CardEditorFormProps } from 'components/cardEditorForm/cardEditorForm';
import styles from './dashboard.module.scss';

interface CardEditorProps extends CardEditorFormProps {
    heading: string;
}

export const CardEditor = ({
    back,
    buttons,
    front,
    heading,
    setBack,
    setFront,
}: CardEditorProps) => {
    return (
        <div className={styles.wrapper}>
            <DashboardHeader heading={heading} />
            <CardEditorForm
                back={back}
                buttons={buttons}
                front={front}
                setBack={setBack}
                setFront={setFront}
            />
        </div>
    );
};
