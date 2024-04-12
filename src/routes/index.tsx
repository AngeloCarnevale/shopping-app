import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./StackNavigation";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
