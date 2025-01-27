import { LangProvider } from "./context/lang";
import { MainPage } from "./pages";

export const App = () => {
  return (
    <LangProvider>
      <MainPage />
    </LangProvider>
  );
};
