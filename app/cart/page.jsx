'use client';
import {useEffect, useState} from 'react';
import Article from '../../components/Article';
import CartArticle from '../../components/CartArticle';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    console.log('Panier mis à jour :', cart.length);
    //fetch(`api/cart/update/{cart.id}`);
  }, [cart]);

  const articles = [
    {id: 1, title: 'Gourde', emoji: '🥤', price: 10},
    {id: 2, title: 'Short', emoji: '🩳', price: 30},
    {id: 3, title: 'Pantalon', emoji: '👖', price: 100},
  ];

  const handleAddToCart = (article) => {
    setTotalArticles(totalArticles + 1);

    const found = cart.find((item) => item.id === article.id);
    if (found) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === article.id
            ? {
                title: item.title,
                price: item.price,
                id: item.id,
                handleRemoveFromCart: item.handleRemoveFromCart,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
      return;
    }
    setCart((prevCart) => [...prevCart, {...article, quantity: 1}]);
  };

  const handleRemoveFromCart = (article_index) => {
    setCart((prevCart) =>
      prevCart.filter((item, idx) => idx !== article_index)
    );
    console.log(`Article retiré du panier: ${cart[article_index].title}`);
    console.log(cart);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold">Mon panier</h1>
      <h2>Articles disponibles</h2>
      <div id="articles">
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              emoji={article.emoji}
              price={article.price}
              handleAddToCart={() => {
                handleAddToCart(article);
              }}
            />
          );
        })}
      </div>

      <h2 className="text-xl font-bold">
        Résultat panier (total articles : {totalArticles})
      </h2>
      <div id="cart">
        {cart.map((article, idx) => (
          <CartArticle
            key={idx}
            title={article.title}
            price={article.price}
            quantity={article.quantity}
            handleRemoveFromCart={() => handleRemoveFromCart(idx)}
          />
        ))}
        {/* <CartArticle title="Gourde" price={10} quantity={1} />
        <CartArticle title="Pantalon" price={100} quantity={2} /> */}
      </div>
    </main>
  );
}
