import { useRouter } from 'next/router';
import { Logo } from 'components/logo/logo';
import { Button } from 'components/button/button';
import styles from '../styles/pages/index.module.scss';

const HomePage = () => {
    const router = useRouter();

    const handleSeeDemoClick = () => {
        router.push('/dashboard');
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                <Logo />
                <span className={styles.hidden}>cards</span>
            </h1>
            <span />
            <Button disabled fullWidth onClick={() => null} type="button">
                Log in
            </Button>
            <Button disabled fullWidth onClick={() => null} type="button">
                Sign up
            </Button>
            <span />
            <Button fullWidth onClick={handleSeeDemoClick} type="button">
                See demo
            </Button>
        </div>
    );
};

export default HomePage;
