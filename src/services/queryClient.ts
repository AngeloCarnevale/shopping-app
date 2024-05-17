import { QueryClient } from "@tanstack/react-query";
import { mercado_livre_api } from "./api";

const queryClient = new QueryClient();

const fetchProducts = async ({
  pageParam,
  search,
}: {
  pageParam: number;
  search: string;
}) => {
  const { data } = await mercado_livre_api.get(
    `sites/MLB/search?q=${search}&offset=${pageParam}&limit=20`
  );

  return data.results;
};

export { queryClient, fetchProducts };
