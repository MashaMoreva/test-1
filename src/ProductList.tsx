import "./ProductList.css";
import { ProductCard } from "./ProductCard";

export const ProductList: React.FC<{
  products: Array<{
    id: string;
    title: string;
    price: number;
    discount?: number;
    imageUrl: string;
  }>;
}> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
