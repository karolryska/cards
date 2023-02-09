import { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames/bind';
import { useDeviceSize } from 'context/deviceWidth';
import { IconButton } from 'components/iconButton/iconButton';
import { Input } from 'components/input/input';
import SearchIcon from 'assets/icons/search.svg';
import ResetIcon from 'assets/icons/reset.svg';
import AddIcon from 'assets/icons/add.svg';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import styles from './dashboardHeader.module.scss';

const cn = classNames.bind(styles);

type CommonProps = {
    heading: string;
    onReturnClick: () => void;
};

type ConditionalProps =
    | {
          addButtonLabel: string;
          onAddClick: () => void;
          searchValue: string;
          setSearchValue: Dispatch<SetStateAction<string>>;
      }
    | { addButtonLabel?: null; onAddClick?: null; searchValue?: null; setSearchValue?: null };

type Props = CommonProps & ConditionalProps;

export const DashboardHeader = ({
    addButtonLabel,
    heading,
    onAddClick,
    onReturnClick,
    searchValue,
    setSearchValue,
}: Props) => {
    const [isSerchbarActive, setIsSearchbarActive] = useState(false);
    const { isMobile } = useDeviceSize();

    if (isMobile && isSerchbarActive && setSearchValue) {
        return (
            <Input
                buttonIcon={<ResetIcon />}
                buttonOnClick={() => setIsSearchbarActive(false)}
                label="search"
                name="search"
                placeholder="search"
                type="text"
                value={searchValue}
                onChange={setSearchValue}
            />
        );
    }

    return (
        <header className={cn('wrapper')}>
            {!isSerchbarActive ? (
                <div className={cn('buttons')}>
                    <IconButton
                        ariaLabel="show searchbar"
                        icon={<ArrowLeftIcon />}
                        onClick={onReturnClick}
                        type="button"
                        variant="icon"
                    />
                    {setSearchValue && (
                        <IconButton
                            ariaLabel="show searchbar"
                            icon={<SearchIcon />}
                            onClick={() => setIsSearchbarActive(true)}
                            type="button"
                            variant="icon"
                        />
                    )}
                </div>
            ) : (
                setSearchValue && (
                    <Input
                        buttonIcon={<ResetIcon />}
                        buttonOnClick={() => setIsSearchbarActive(false)}
                        label="search"
                        name="search"
                        placeholder="search"
                        type="text"
                        value={searchValue}
                        onChange={setSearchValue}
                    />
                )
            )}
            <h1 className={cn('heading')}>{heading}</h1>
            <div className={cn('buttons--right')}>
                {onAddClick && (
                    <IconButton
                        ariaLabel={addButtonLabel}
                        icon={<AddIcon />}
                        onClick={onAddClick}
                        type="button"
                        variant="icon"
                    />
                )}
            </div>
        </header>
    );
};
