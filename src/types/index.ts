import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type ProductType = {
  id: string;
  title: string;
  image: string;
  price?: number;
};

type TabNavigation = {
  Home: undefined;
  Profile: undefined;
  ProductDetail: undefined;
  Dashboard: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;
