import "./ProductCard.css";

export const ProductCard: React.FC<{
  id: string;
  title: string;
  price: number;
  discount?: number;
  imageUrl: string;
}> = ({ id, title, price, discount, imageUrl }) => {
  const discountedPrice = discount ? price - price * discount : price;

  return (
    <div key={id} className="product-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p className="price">
        {discount ? (
          <>
            <span className="discounted">{discountedPrice} ₽</span>
            <span className="original">{price} ₽</span>
          </>
        ) : (
          <span>{price} ₽</span>
        )}
      </p>
    </div>
  );
};
