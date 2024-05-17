import axios from "axios";

export const mercado_livre_api = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});
