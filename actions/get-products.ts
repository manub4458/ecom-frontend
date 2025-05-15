// actions/get-products.ts
import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  limit?: string;
  page?: string;
  type?: "MEN" | "WOMEN" | "KIDS" | "BEAUTY" | "ELECTRONICS"; // Updated to match schema
  price?: string;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      limit: query.limit,
      type: query.type,
      price: query.price,
      page: query.page,
    },
  });

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("getProducts fetch error:", res.status, res.statusText);
      return [];
    }

    const text = await res.text();

    if (!text) {
      console.warn("getProducts: empty response");
      return [];
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("getProducts JSON parse or network error:", error);
    return [];
  }
};
