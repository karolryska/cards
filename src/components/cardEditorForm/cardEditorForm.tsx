import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Input } from 'components/input/input';
import styles from './cardEditorForm.module.scss';

const cn = classNames.bind(styles);

export type CardEditorFormProps = {
    back: string;
    buttons: ReactNode;
    front: string;
    setBack: (value: string) => void;
    setFront: (value: string) => void;
};

export const CardEditorForm = ({
    back,
    buttons,
    front,
    setBack,
    setFront,
}: CardEditorFormProps) => {
    return (
        <form className={cn('wrapper')}>
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
            <div className={cn('buttons')}>{buttons}</div>
        </form>
    );
};
