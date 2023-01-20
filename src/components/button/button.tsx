import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cn = classNames.bind(styles);

interface ButtonProps {
    children: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick: () => void;
    type: 'submit' | 'reset' | 'button';
}

export const Button = ({ children, disabled, fullWidth, onClick, type }: ButtonProps) => {
    return (
        <button
            className={cn('wrapper', { fullWidth })}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
