import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { getCoins } from "../hooks/getCoins";
import { CoinItem } from "./CoinItem";

const CoinsList = ({ paramSearch }) => {
  const coins = getCoins();

  const coinsFilter = coins.filter((coin) => {
    const paramLowerCase = paramSearch.toLowerCase();
    const coinLowerCase = coin.name.toLowerCase();
    const symbolLowerCase = coin.symbol.toLowerCase()
    return coinLowerCase.includes(paramLowerCase) || symbolLowerCase.includes(paramLowerCase)
  });

  const arrayCoins = paramSearch !== "" ? coinsFilter : coins
  console.log(arrayCoins)
  console.log(paramSearch)

  return (
    <FlatList
      data={arrayCoins}
      renderItem={({ item }) => {
        return <CoinItem coin={item} />;
      }}
      style={styles.listCoin}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default React.memo(CoinsList);

const styles = StyleSheet.create({
  listCoin: {
    width: "90%",
  },
});
