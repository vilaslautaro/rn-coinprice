import { useContext } from "react";
import { CoinContext } from "../context/Coins.context";
import { ParamContext } from "../context/SearchParam.context";

export const coinsFilter = () => {
  const { coins } = useContext(CoinContext);
  const { paramSearch } = useContext(ParamContext);

  const coinsFiltered = coins.filter((coin) => {
    const paramLowerCase = paramSearch.toLowerCase();
    const coinLowerCase = coin.name.toLowerCase();
    const symbolLowerCase = coin.symbol.toLowerCase();
    return (
      coinLowerCase.includes(paramLowerCase) ||
      symbolLowerCase.includes(paramLowerCase)
    );
  });

  const arrayCoins = paramSearch !== "" ? coinsFiltered : coins;
  return arrayCoins;
};
