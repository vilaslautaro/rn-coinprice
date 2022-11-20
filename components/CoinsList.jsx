import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { fetchCoins } from "../services/fetchCoins";
import { CoinItem } from "./CoinItem";

const CoinsList = ({ paramSearch }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [coins, setCoins] = useState([]);

  const apiCall = () => {
    fetchCoins().then((res) => setCoins(res));
  }

  useEffect(() => {
    apiCall()
  }, []);

  const coinsFilter = coins.filter((coin) => {
    const paramLowerCase = paramSearch.toLowerCase();
    const coinLowerCase = coin.name.toLowerCase();
    const symbolLowerCase = coin.symbol.toLowerCase()
    return coinLowerCase.includes(paramLowerCase) || symbolLowerCase.includes(paramLowerCase)
  });

  const arrayCoins = paramSearch !== "" ? coinsFilter : coins

  if(refreshing) return <Text>Cargando...</Text>

  return (
    <FlatList
      data={arrayCoins}
      renderItem={({ item }) => {
        return <CoinItem coin={item} />;
      }}
      style={styles.listCoin}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={() => {
        setRefreshing(true)
        apiCall()
        setRefreshing(false)
      }}
    />
  );
};

export default React.memo(CoinsList);

const styles = StyleSheet.create({
  listCoin: {
    width: "90%",
  },
});
