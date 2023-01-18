import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { DashboardHeader } from 'components/dashboardHeader/dashboardHeader';
import { Button } from 'components/button/button';
import { Card } from 'components/card/card';
import { Item, Collection } from '../../../types';
import styles from './dashboard.module.scss';

const cn = classNames.bind(styles);

interface CardsProps {
    buttonLabel?: string;
    heading: string;
    items: Collection[] | Item[];
    onCardClick: (value: string) => void;
}

export const Dashborad = ({ buttonLabel, heading, items, onCardClick }: CardsProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(items);

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
                buttonLabel="Add collection"
                heading={heading}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className={styles.scrollWrapper}>
                {data.map(({ name }) => (
                    <Card title={name} onClick={onCardClick} />
                ))}
            </div>
            {!!buttonLabel && (
                <Button fullWidth type="button">
                    {buttonLabel}
                </Button>
            )}
        </div>
    );
};
