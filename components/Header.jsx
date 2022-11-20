import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={"#141414"} />
      <View styles={styles.header}>
        <Text style={styles.title}>CoinPrice</Text>
        <TextInput style={styles.searchInput} />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    marginTop: 10,
    fontSize: 25,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    textAlign: "center",
    width: "40%",
  },
});
