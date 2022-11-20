import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CoinsList from "./components/CoinsList";
import Header from "./components/Header";

export default function App() {
  const [paramSearch, setParamSearch] = useState('')

  return (
    <View style={styles.container}>
      <Header setParamSearch={setParamSearch} />
      <CoinsList paramSearch={paramSearch} />
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
