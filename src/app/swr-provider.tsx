'use client';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr'


export const SWRProvider: React.FC<PropsWithChildren> = ({children}) => {
    return <SWRConfig>{children}</SWRConfig>
};