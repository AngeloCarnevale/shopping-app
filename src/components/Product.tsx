import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProductType, TabTypes } from "../types";
import { useNavigation } from "@react-navigation/native";

export default function Product({ product }: { product: ProductType }) {
  const navigation = useNavigation<TabTypes>()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetail")} className="bg-white flex flex-row w-full pb-10 pt-4 border-b border-gray-200">
      <Image
        source={{ uri: product.image }}
        style={{ width: 150, height: 150 }}
        alt="Product image"
      />
      <View className="px-2">
        <Text>{product?.title}</Text>
        <Text>R${product?.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
