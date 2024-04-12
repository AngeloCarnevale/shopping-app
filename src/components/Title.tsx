import { TextProps, Text } from "react-native";
import React from "react";

export default function Title(props: TextProps) {
  return <Text className="text-white font-bold text-xl mt-6 mb-2" {...props} />;
}
