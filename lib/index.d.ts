/// <reference types="react" />
declare type SavvyCalProviderProps = {
    children: JSX.Element;
};
export declare function SavvyCalProvider(props: SavvyCalProviderProps): JSX.Element;
declare type UseSavvyCal = {
    open: (opts: OpenOpts) => void;
};
declare type OpenOpts = {
    link: string;
    email?: string;
    displayName?: string;
};
export declare const useSavvyCal: () => UseSavvyCal;
export {};
