import { View, Text, Image } from "react-native";
import React from "react";
import { ProductType } from "../types";

export default function Product({ product }: { product: ProductType }) {
  return (
    <View className="bg-gray-600 p-4 m-5 flex-1 items-center justify-center">
      <Image source={{ uri: product?.image }} alt="Product image" />
      <Text>{product?.title}</Text>
      <Text>{product?.price}</Text>
    </View>
  );
}
