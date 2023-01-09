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
    error?: boolean;
    field?: FieldProps;
    helperText?: string;
    label: string;
    labelVisuallyHidden?: boolean;
    name: string;
    onChange: (value: string) => void;
    placeholder: string;
    type: 'email' | 'password' | 'text';
    value: string;
}

export const Input = ({
    error,
    field,
    helperText,
    label,
    name,
    onChange,
    placeholder,
    type,
    value,
}: InputProps) => {
    return (
        <div className={cx('wrapper', { helperText, error })}>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
                value={value}
                {...field}
            />
            {helperText ? <p className={cx('text')}>{helperText}</p> : null}
        </div>
    );
};
