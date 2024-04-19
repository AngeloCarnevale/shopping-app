import { SafeAreaView, StatusBar } from "react-native";
import "./src/styles/global.css";
import Routes from "./src/routes";
import ProductsContainer from "./src/components/ProductsContainer";

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <Routes />
      <StatusBar barStyle={"light-content"} />
    </SafeAreaView>
  );
}

export default App;
