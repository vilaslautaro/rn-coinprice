import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { coinsFilter } from "../utils/coinsFilter";
import { getCoins } from "../utils/getCoins";
import { CoinItem } from "./CoinItem";

const CoinsList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const arrayCoins = coinsFilter();

  const updatedPrices = () => {
    setRefreshing(true);
    getCoins();
    setRefreshing(false);
    return;
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <FlatList
      data={arrayCoins}
      renderItem={({ item }) => {
        return (
          <CoinItem
            image={item.image}
            name={item.name}
            symbol={item.symbol}
            price={item.current_price}
            priceChanged={coin.price_change_porcentage_24h}
          />
        );
      }}
      style={styles.listCoin}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={updatedPrices}
    />
  );
};

export default React.memo(CoinsList);

const styles = StyleSheet.create({
  listCoin: {
    width: "90%",
  },
});
