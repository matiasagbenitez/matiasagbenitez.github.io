import { createContext } from "react";
import { LangType } from "./LangProvider";

export interface LangContextProps {
    lang: LangType;
    setLang: (lang: LangType) => void;
}

export const LangContext = createContext<LangContextProps>({} as LangContextProps);