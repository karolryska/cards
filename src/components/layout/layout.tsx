import { Logo } from 'components/logo/logo';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.heading}>
                <Logo />
                <div className={styles.avatar} />
            </header>
            <main className={styles.content}>{children}</main>
        </div>
    );
};
