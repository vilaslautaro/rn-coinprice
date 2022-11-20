import { createContext, useState } from "react";

export const CoinContext = createContext();

export const CoinsProvider = ({children}) => {
  const [coins, setCoins] = useState([]);
 

  return (
    <CoinContext value={{ coins, setCoins}}>
      {children}
    </CoinContext>
  );
};
