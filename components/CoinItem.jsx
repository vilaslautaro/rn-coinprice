import { View, Text, StyleSheet, Image } from "react-native";

export const CoinItem = ({ coin }) => {
  const stylesPricePorcentage = coin.price_change_porcentage_24h
    ? styles.priceUp
    : styles.priceDown;

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          alt="image coin"
          source={{ uri: coin.image }}
        />
        <View style={styles.coinNames}>
          <Text style={styles.name}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View style={styles.prices}>
        <Text style={styles.price}>${coin.current_price}</Text>
        <Text style={stylesPricePorcentage}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101010",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#fff",
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinNames: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 3,
  },
  name: {
    color: "#fff",
    fontSize: 18,
  },
  symbol: {
    color: "#ababab",
    textTransform: "uppercase",
    fontSize: 15,
    marginLeft: 3,
  },
  prices: {
    alignItems: "flex-end",
    textAlign: "right",
  },
  price: {
    fontSize: 20,
    color: "#fff",
  },
  priceUp: {
    color: "#00b5b9",
    fontSize: 20,
  },
  priceDown: {
    fontSize: 20,
    color: "#d20f0f",
  },
});
