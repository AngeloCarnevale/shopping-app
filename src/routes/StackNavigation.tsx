import ProductDetail from "../app/ProductDetail";
import Home from "../app/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="tab-naigation">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="tab-navigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
