import { useContext } from "react";
import { CoinContext } from "../context/Coins.context";
import { fetchCoins } from "../services/fetchCoins";

export const getCoins = () => {
  const { setCoins } = useContext(CoinContext);
  const arrayCoins = fetchCoins().then((res) => setCoins(res));
  return arrayCoins;
};
