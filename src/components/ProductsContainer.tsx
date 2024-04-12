import { FlatList, Text, View } from "react-native";
import { ProductType } from "@/types";
import Product from "./Product";

export default function ProductsContainer() {
  const PRODUCTS: ProductType[] = [
    {
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
  ];
  return (
    <View className="flex-1 w-full ">
      <FlatList
        contentContainerClassName="items-center flex p-2"
        data={PRODUCTS}
        numColumns={2}
        renderItem={({ item }) => <Product product={item} />}
      />
    </View>
  );
}
