export default function Article({title, emoji, price, handleAddToCart}) {
  return (
    <div className="m-2 border">
      <p>{emoji}</p>
      <h3>{title}</h3>
      <p>Prix : {price}€</p>
      {handleAddToCart && (
        <button
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </button>
      )}
    </div>
  );
}
