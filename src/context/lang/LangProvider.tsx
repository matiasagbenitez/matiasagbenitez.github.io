import { useReducer } from "react";
import { LangContext } from "./LangContext";
import { langReducer } from "./langReducer";

export type LangType = "en" | "es";

export interface LangState {
  lang: LangType;
}

const INITIAL_STATE: LangState = {
  lang: "es",
};

interface ChildProps {
  children: JSX.Element | JSX.Element[];
}

export const LangProvider: React.FC<ChildProps> = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, INITIAL_STATE);

  const setLang = (lang: LangType) => {
    dispatch({ type: "SET_LANG", payload: lang });
  };

  return (
    <LangContext.Provider value={{ ...state, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
