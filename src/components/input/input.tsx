import { ReactNode, ChangeEvent } from 'react';
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
    buttonIcon?: ReactNode;
    buttonOnClick?: () => void;
    error?: boolean;
    field?: FieldProps;
    fullHeight?: boolean;
    helperText?: string;
    label: string;
    labelVisuallyHidden?: boolean;
    name: string;
    onChange: (value: string) => void;
    placeholder?: string;
    textarea?: boolean;
    type: 'email' | 'password' | 'text';
    value: string;
}

export const Input = ({
    buttonIcon,
    buttonOnClick,
    error,
    field,
    fullHeight,
    helperText,
    label,
    name,
    onChange,
    placeholder,
    textarea,
    type,
    value,
}: InputProps) => {
    const textFieldProps = {
        name,
        onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onChange(e.target.value),
        placeholder: placeholder || label,
        type,
        value,
        ...field,
    };
    return (
        <div className={cx('wrapper', { helperText, error, fullHeight: fullHeight || textarea })}>
            <label htmlFor={name}>{label}</label>
            <div className={cx('innerWrapper')}>
                {textarea ? <textarea {...textFieldProps} /> : <input {...textFieldProps} />}
                {!!buttonIcon && <button onClick={buttonOnClick}>{buttonIcon}</button>}
            </div>
            {helperText ? <p className={cx('text')}>{helperText}</p> : null}
        </div>
    );
};
