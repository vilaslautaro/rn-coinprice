import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SwapScreen from "../screens/SwapScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Market"
      screenOptions={{
        tabBarActiveTintColor: "#070707",
      }}
    >
      <Tab.Screen
        name="Market"
        component={MyStack}
        options={{
          tabBarLabel: "Market",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="store" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarLabel: "Swap",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="swap-horizontal"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
