import ProductDetail from "../app/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../app/Login";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" options={{headerShown: false}} component={TabNavigation} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
