/// <reference types="react" />
import { AuthorConfig, NavLink } from "../types";
interface Props {
    links: Array<NavLink>;
    author: AuthorConfig;
}
export declare const Footer: React.FC<Props>;
export {};
