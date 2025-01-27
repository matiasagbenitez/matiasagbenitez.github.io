import { LangState } from "./LangProvider";

type LangAction = { type: "SET_LANG"; payload: "en" | "es" };

export const langReducer = (state: LangState, action: LangAction): LangState => {
    switch (action.type) {
        case "SET_LANG":
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state;
    }
};