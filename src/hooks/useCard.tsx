import { useEffect, useState } from 'react';

export const useCard = (frontValue: string, backValue: string) => {
    const [front, setFront] = useState(frontValue);
    const [back, setBack] = useState(backValue);

    useEffect(() => {
        setFront(frontValue);
    }, [frontValue]);

    useEffect(() => {
        setBack(backValue);
    }, [backValue]);

    return { front, back, setFront, setBack, isFilled: !!(front && back) };
};
