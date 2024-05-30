import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    //Get all products
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    //Getting single product by ID
    getProductById: builder.query({
      query: (id) => `product/${id}`,
    }),

    //Posting a new product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    //Getting all products
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),

    //Deleting product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
