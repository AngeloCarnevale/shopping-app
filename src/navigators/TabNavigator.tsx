import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#000",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}
