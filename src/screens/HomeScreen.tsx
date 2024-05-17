import { View, StatusBar, FlatList } from "react-native";
import { fetchProducts } from "../services/queryClient";
import { HeaderBar } from "../components/HeaderBar";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductRenderItem from "../components/ProductRenderItem";


export default function HomeScreen() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await fetchProducts({ pageParam: 1, search: "smartphone" }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
  });

  return (
    <View className="flex-1 bg-gray-200">
      <StatusBar />
      <HeaderBar />
      <FlatList
        keyExtractor={(item) => item.name}
        contentContainerClassName="px-2 flex gap-2 mt-6"
        columnWrapperClassName="flex gap-2"
        data={data?.pages.flatMap((page) => page)}
        renderItem={({ item }) => <ProductRenderItem product={item} />}
        numColumns={2}
        onEndReached={()=> {
          if(hasNextPage){
            fetchNextPage()
          }
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
