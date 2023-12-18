import ReactDOM from "react-dom/client";
import { products } from "./products";
import "./main.css";
import { ProductList } from "./ProductList";

const rootElement = document.getElementById("root");

if (rootElement) {
  const reactRoot = ReactDOM.createRoot(rootElement);
  reactRoot.render(<ProductList products={products} />);
} else {
  console.error("Root element with id 'root' not found");
}
