import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './iconButton.module.scss';

const cn = classNames.bind(styles);

interface IconButtonProps {
    ariaLabel: string;
    disabled?: boolean;
    fullSize?: boolean;
    icon: ReactNode;
    onClick: () => void;
    type: 'button' | 'reset' | 'submit';
    variant: 'contained' | 'icon';
}

export const IconButton = ({
    ariaLabel,
    disabled,
    fullSize,
    icon,
    onClick,
    type,
    variant,
}: IconButtonProps) => {
    return (
        <button
            aria-label={ariaLabel}
            className={cn('wrapper', variant, { fullSize })}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {icon}
        </button>
    );
};
