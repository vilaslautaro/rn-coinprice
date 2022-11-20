import { CoinsProvider } from "./context/Coins.context";
import { SearchParamProvider } from "./context/SearchParam.context";
import Navigation from "./Navigation";

export default function App() {
  return (
    <CoinsProvider>
      <SearchParamProvider>
        <Navigation />
      </SearchParamProvider>
    </CoinsProvider>
  );
}


