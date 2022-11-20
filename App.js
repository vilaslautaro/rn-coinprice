import { StyleSheet, View, FlatList } from "react-native";
import { CoinItem } from "./components/CoinItem";
import getCoins from "./hooks/getCoins";

export default function App() {
  const coins = getCoins();

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
  },
});
