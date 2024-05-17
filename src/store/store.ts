import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProductStore {
  productList: any[];
  setProductList: () => void;
}

export const useStore = create<ProductStore>(
  // persist(
  //   (set) => ({
  //     productsList: [],
  //     setProductList: () =>
  //       set((state: any) => ({ productList: state.productsList })),
  //   }),
  //   {
  //     name: "shopping-app",
  //     storage: createJSONStorage(() => AsyncStorage),
  //   }
  // )
);
