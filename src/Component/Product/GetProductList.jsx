import React from "react";
import { useGetProductlistQuery } from "./GetProductApiSlice";

function GetProductList() {
  const { data } = useGetProductlistQuery();
  console.log("data", data);
  return (
    <ul>
      {data?.products?.map((product) => {
        return <li>{product.title}</li>;
      })}
    </ul>
  );
}

export default GetProductList;
