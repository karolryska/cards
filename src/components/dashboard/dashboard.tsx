import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { Button } from 'components/button/button';
import { Card, OnCardClick } from 'components/card/card';
import styles from './dashboard.module.scss';

const cn = classNames.bind(styles);

type Card = {
    id: string;
    name: string;
};

type DashboradProps = {
    addButtonLabel: string;
    buttonLabel?: string;
    heading: string;
    items: Card[];
    onAddClick: () => void;
    onCardClick: OnCardClick;
    onReturnClick: () => void;
};

export const Dashborad = ({
    addButtonLabel,
    buttonLabel,
    heading,
    items,
    onAddClick,
    onCardClick,
    onReturnClick,
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
                addButtonLabel={addButtonLabel}
                heading={heading}
                onAddClick={onAddClick}
                onReturnClick={onReturnClick}
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
