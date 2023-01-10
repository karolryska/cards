import { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from 'components/button/button';
import { IconButton } from 'components/iconButton/iconButton';
import { Input } from 'components/input/input';
import SearchIcon from 'assets/icons/search.svg';
import ResetIcon from 'assets/icons/reset.svg';
import AddIcon from 'assets/icons/add.svg';
import styles from './dashboardHeader.module.scss';

const cn = classNames.bind(styles);

interface DashboardHeaderProps {
    buttonLabel: string;
    heading: string;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export const DashboardHeader = ({
    buttonLabel,
    heading,
    searchValue,
    setSearchValue,
}: DashboardHeaderProps) => {
    const [isSerchbarActive, setIsSearchbarActive] = useState(false);

    return (
        <>
            <header className={cn('wrapper', 'mobile', { searchbarMobile: isSerchbarActive })}>
                {isSerchbarActive ? (
                    <Input
                        buttonIcon={<ResetIcon />}
                        buttonOnClick={() => {
                            setIsSearchbarActive((prev) => !prev);
                            setSearchValue('');
                        }}
                        fullHeight
                        label="search"
                        name="search"
                        placeholder="search"
                        type="text"
                        value={searchValue}
                        onChange={setSearchValue}
                    />
                ) : (
                    <>
                        <IconButton
                            ariaLabel="show searchbar"
                            icon={<SearchIcon />}
                            onClick={() => setIsSearchbarActive((prev) => !prev)}
                            type="button"
                            variant="icon"
                        />
                        <h1 className={cn('heading')}>{heading}</h1>
                        <IconButton
                            ariaLabel={buttonLabel}
                            icon={<AddIcon />}
                            onClick={() => setIsSearchbarActive((prev) => !prev)}
                            type="button"
                            variant="icon"
                        />
                    </>
                )}
            </header>
            <header className={cn('wrapper', 'desktop', { searchbarMobile: isSerchbarActive })}>
                <Input
                    buttonIcon={!!searchValue && <ResetIcon />}
                    buttonOnClick={() => setSearchValue('')}
                    label="search"
                    name="search"
                    placeholder="search"
                    type="text"
                    value={searchValue}
                    onChange={setSearchValue}
                />
                <h1 className={cn('heading')}>{heading}</h1>
                <Button fullWidth type="button">
                    {buttonLabel}
                </Button>
            </header>
        </>
    );
};
