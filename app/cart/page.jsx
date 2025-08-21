'use client';
import {useEffect, useState} from 'react';
import Article from '../../components/Article';
import CartArticle from '../../components/CartArticle';

export default function Cart() {
  const [cart, setCart] = useState([]);

  // useEffect(() => {

  // }, [cart]);

  const articles = [
    {id: 1, title: 'Gourde', emoji: '🥤', price: 10},
    {id: 2, title: 'Short', emoji: '🩳', price: 30},
    {id: 3, title: 'Pantalon', emoji: '👖', price: 100},
  ];

  const handleAddToCart = (article) => {
    setCart((prevCart) => [...prevCart, article]);
    console.log(`Article ajouté au panier: ${article.title}`);
    console.log(cart);
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

      <h2>Résultat panier (total articles : {cart.length})</h2>
      <div id="cart">
        {cart.map((article, idx) => (
          <CartArticle
            key={idx}
            title={article.title}
            price={article.price}
            quantity={0}
            handleRemoveFromCart={() => handleRemoveFromCart(idx)}
          />
        ))}
        {/* <CartArticle title="Gourde" price={10} quantity={1} />
        <CartArticle title="Pantalon" price={100} quantity={2} /> */}
      </div>
    </main>
  );
}
