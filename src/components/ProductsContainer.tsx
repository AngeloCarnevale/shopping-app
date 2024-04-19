import { FlatList, Text, View, ScrollView } from "react-native";
import { ProductType } from "@/types";
import Product from "./Product";

export default function ProductsContainer() {
  const PRODUCTS: ProductType[] = [
    {
      id: "1",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "2",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "3",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "4",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "5",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "6",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "7",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: " 8",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
    {
      id: "9",
      image: "https://github.com/AngeloCarnevale.png",
      price: 100,
      title: "First Item",
    },
  ];
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product product={item} />}
    />
  );
}
