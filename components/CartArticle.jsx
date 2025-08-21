export default function CartArticle({
  title,
  price,
  quantity,
  handleRemoveFromCart,
}) {
  return (
    <div className="m-2 border">
      <h3>{title}</h3>
      <p>Prix : {price}€</p>
      <p>Quantité : {quantity}</p>
      <button onClick={handleRemoveFromCart}>❌</button>
    </div>
  );
}
