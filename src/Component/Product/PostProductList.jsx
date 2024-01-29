import React from "react";
import { usePostProductMutation } from "./PostProductApiSlice";

function PostProductList() {
  const [postProduct] = usePostProductMutation();

  return (
    <div>
      Post
      <button
        onClick={() => {
          postProduct({
            id: 3,
            title: "iPhone 111",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apples",
            category: "smartphones",
            thumbnail:
              "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
              "https://cdn.dummyjson.com/product-images/1/1.jpg",
              "https://cdn.dummyjson.com/product-images/1/2.jpg",
              "https://cdn.dummyjson.com/product-images/1/3.jpg",
              "https://cdn.dummyjson.com/product-images/1/4.jpg",
              "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
          });
        }}
      >
        Post Product
      </button>
    </div>
  );
}

export default PostProductList;
