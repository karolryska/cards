import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './dashboardLayout.module.scss';

const cn = classNames.bind(styles);

interface DashboradLayoutProps {
    buttons?: ReactNode;
    content: ReactNode;
    header: ReactNode;
}

export const DashboradLayout = ({ buttons, content, header }: DashboradLayoutProps) => {
    return (
        <div className={cn('wrapper', { withButtons: buttons })}>
            {header}
            {content}
            {!!buttons && <div className={cn('buttons')}>{buttons}</div>}
        </div>
    );
};
