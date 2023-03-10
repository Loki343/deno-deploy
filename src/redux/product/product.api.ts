import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsAPI = async () => {
  let res: AxiosResponse<Product[]> = await axios.get(
    "http://localhost:8080/products"
  );
  return res.data;
};

//I will take this id from URL so I take it string
export const getProductAPI = async (id: string) => {
  let res: AxiosResponse<Product> = await axios.get(
    `http://localhost:8080/products/${id}`
  );
  return res.data;
};
