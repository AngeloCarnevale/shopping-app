import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TabTypes } from "../types";

export default function ProductRenderItem({ product }: { product: any }) {
  const navigation = useNavigation<TabTypes>()
  return (
    <TouchableOpacity className="bg-white flex-1 p-3 rounded items-center py-6" onPress={() => navigation.navigate("ProductDetail")}>
      <View className="w-full flex justify-center pb-4">
        <Image
          source={{ uri: product.thumbnail.replace("-I.jpg", "-L.jpg") }}
          className="w-40 h-40 mix-blend-multiply"
          alt="Product thumbnail"
        />
      </View>
      <View className="w-full flex flex-col gap-4 items-center">
        <Text
          className="font-medium text-black truncate text-center"
          numberOfLines={2}
        >
          {product.title}
        </Text>
        <Text className="text-black font-semibold text-2xl">
          R${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
