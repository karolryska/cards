import { useEffect, useState } from 'react';

export const useCard = (backValue: string, frontValue: string) => {
    const [front, setFront] = useState(frontValue);
    const [back, setBack] = useState(backValue);

    useEffect(() => {
        setBack(backValue);
    }, [backValue]);

    useEffect(() => {
        setFront(frontValue);
    }, [frontValue]);

    return { back, front, setBack, setFront, isFilled: !!(front && back) };
};
