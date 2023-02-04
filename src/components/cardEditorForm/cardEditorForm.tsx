import classNames from 'classnames/bind';
import { useCard } from 'hooks/useCard';
import { Input } from 'components/input/input';
import { Button } from 'components/button/button';
import styles from './cardEditorForm.module.scss';

const cn = classNames.bind(styles);

export type CardEditorButtonsType = {
    label: string;
    type: 'submit' | 'button';
    onClick: () => void;
}[];

export type CardEditorFormProps = {
    buttons: CardEditorButtonsType;
    card: {
        front: string;
        back: string;
    };
    onSubmit: (front: string, back: string) => void;
};

export const CardEditorForm = ({ buttons, card, onSubmit }: CardEditorFormProps) => {
    const { back, front, setBack, setFront, isFilled } = useCard(card.front || '', card.back || '');

    return (
        <form
            className={cn('wrapper')}
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                onSubmit(front, back);
                setFront('asd');
                setBack('asd');
            }}
        >
            <div className={cn('textFields')}>
                <Input
                    name="front"
                    label="front"
                    onChange={setFront}
                    textarea
                    type="text"
                    value={front}
                />
                <Input
                    name="back"
                    label="back"
                    onChange={setBack}
                    textarea
                    type="text"
                    value={back}
                />
            </div>
            <div className={cn('buttons')}>
                {buttons.map(({ label, type, onClick }) => (
                    <Button type={type} onClick={onClick} disabled={type === 'submit' && !isFilled}>
                        {label}
                    </Button>
                ))}
            </div>
        </form>
    );
};
