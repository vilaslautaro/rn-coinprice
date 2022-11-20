import { FlatList, StyleSheet } from "react-native";
import React from "react";
import getCoins from "../hooks/getCoins";
import { CoinItem } from "./CoinItem";

const CoinsList = () => {
  const coins = getCoins();
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => {
        return <CoinItem coin={item} />;
      }}
      style={styles.listCoin}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CoinsList;

const styles = StyleSheet.create({
  listCoin: {
    width: "90%",
  },
});
