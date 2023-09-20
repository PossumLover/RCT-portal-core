/// <reference types="react" />
import { NavLink, SearchProviderConfig } from "../types";
interface Props extends React.PropsWithChildren {
    author?: string;
    links?: Array<NavLink>;
    search?: SearchProviderConfig;
}
export declare const NavMobile: React.FC<Props>;
export {};
