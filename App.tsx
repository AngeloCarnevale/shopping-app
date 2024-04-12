import Profile from "./src/app/Profile";
import { StatusBar } from "react-native";
import "./src/styles/global.css";

function App(): React.JSX.Element {
  return (
    <>
      <Profile />
      <StatusBar />
    </>
  );
}

export default App;
