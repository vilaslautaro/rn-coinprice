import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, View, TextInput, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ParamContext } from "../context/SearchParam.context";

export const Header = () => {
  const { setParamSearch } = useContext(ParamContext);

  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={"#141414"} />
      <View styles={styles.header}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setParamSearch(text)}
          placeholder="Search a coin"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <MaterialCommunityIcons
            name="account-settings"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
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
    backgroundColor: "#494949",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    textAlign: "center",
    width: "70%",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 30,
    height: 30,
  },
});
