import { useEffect, useState } from "react";
import "./ProductList.css";
import { getProducts } from "../services/productService";
import Product from "../models/Product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const showProducts: Product[] = await getProducts();
      setProducts(showProducts);
    })();
  }, []);

  return (
    <ul className="ProductList">
      {products.map((item) => (
        <ProductCard product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
