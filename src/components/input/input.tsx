import classNames from 'classnames/bind';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

interface FieldProps {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    value: string;
}

interface InputProps {
    field?: FieldProps;
    label: string;
    labelVisuallyHidden?: boolean;
    name: string;
    onChange: () => void;
    placeholder: string;
    type: 'email' | 'password' | 'text';
    warningMessage?: string;
    value: string;
}

export const Input = ({
    field,
    label,
    name,
    placeholder,
    type,
    warningMessage,
    value,
}: InputProps) => {
    return (
        <div className={cx('wrapper', { error: warningMessage })}>
            <label htmlFor={name}>{label}</label>
            <input name={name} placeholder={placeholder} type={type} value={value} {...field} />
            {warningMessage ? <p className={cx('message')}>{warningMessage}</p> : null}
        </div>
    );
};
