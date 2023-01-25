import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './centeredTextField.module.scss';

const cn = classNames.bind(styles);

interface CenteredTextFieldProps {
    setValue: (value: string | null) => void;
}

export const CenteredTextField = ({ setValue }: CenteredTextFieldProps) => {
    const inputRef = useRef<HTMLDivElement>(null);

    const handeFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={cn('wrapper')} onClick={handeFocus} tabIndex="1">
            <div
                ref={inputRef}
                className={cn('textField')}
                contentEditable
                onInput={(e) => setValue(e.currentTarget.textContent)}
            />
        </div>
    );
};
