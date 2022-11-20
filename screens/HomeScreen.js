import { View } from "react-native";
import CoinsList from "../components/CoinsList";
import { Header } from "../components/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CoinsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
  },
});
