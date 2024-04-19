import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "@/types";

export default function Login() {
  const navigation = useNavigation<TabTypes>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
