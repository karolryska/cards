import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { Button } from 'components/button/button';
import { Card, OnCardClick } from 'components/card/card';
import styles from './dashboard.module.scss';

const cn = classNames.bind(styles);

interface Card {
    id: string;
    name: string;
}
interface DashboradProps {
    buttonLabel?: string;
    headerButtonLabel?: string;
    heading: string;
    items: Card[];
    onAddClick: () => void;
    onCardClick: OnCardClick;
}

export const Dashborad = ({
    buttonLabel,
    headerButtonLabel,
    heading,
    items,
    onAddClick,
    onCardClick,
}: DashboradProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(items);

    useEffect(() => {
        setData(items);
    }, [items]);

    useEffect(() => {
        setData(
            searchValue
                ? items.filter(({ name }) =>
                      name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
                  )
                : items,
        );
    }, [searchValue]);

    return (
        <div className={cn('wrapper', { withButton: buttonLabel })}>
            <DashboardHeader
                buttonLabel={headerButtonLabel}
                heading={heading}
                onAddClick={onAddClick}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className={styles.scrollWrapper}>
                {data.map(({ id, name }) => (
                    <Card key={id} id={id} title={name} onClick={onCardClick} />
                ))}
            </div>
            {!!buttonLabel && (
                <Button fullWidth onClick={onAddClick} type="button">
                    {buttonLabel}
                </Button>
            )}
        </div>
    );
};
