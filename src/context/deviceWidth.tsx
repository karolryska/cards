import React, { useState, useMemo, useEffect, createContext, useContext, ReactNode } from 'react';

type DeviceSizeContextState = {
    isMobile: boolean;
};

const DeviceSizeContext = createContext<DeviceSizeContextState | null>(null);

export const DeviceSizeContextProvider = ({ children }: { children: ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewportWidth = () => setIsMobile(window.innerWidth < 768);

        checkViewportWidth();

        window.addEventListener('resize', checkViewportWidth);

        return () => window.removeEventListener('resize', checkViewportWidth);
    }, []);

    return (
        <DeviceSizeContext.Provider
            value={useMemo(() => {
                return { isMobile };
            }, [isMobile])}
        >
            {children}
        </DeviceSizeContext.Provider>
    );
};

export const useDeviceSize = () => {
    const deviceSize = useContext(DeviceSizeContext);

    if (deviceSize === null) throw Error('No viewport');

    return deviceSize;
};
