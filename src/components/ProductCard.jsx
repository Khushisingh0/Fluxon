import styles from "../style/Products.module.css";
import { motion } from "framer-motion";

const fallbackImage =
  "https://via.placeholder.com/400x500?text=Product";

const ProductCard = ({ product }) => {
  if (!product) return null; // safety guard

  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.imageBox}>
        <img
          src={product.image || fallbackImage}
          alt={product.title}
          loading="lazy"
          decoding="async"
          onError={(e) => (e.target.src = fallbackImage)}
        />

        <span className={styles.discount}>
          {Math.round(
            ((product.originalPrice - product.price) /
              product.originalPrice) *
              100
          )}
          % OFF
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3>{product.title}</h3>

        <p className={styles.price}>
          ₹{product.price}
          <span>₹{product.originalPrice}</span>
        </p>

        <p className={styles.rating}>⭐ {product.rating}</p>

        <div className={styles.actions}>
          <button className={styles.wishlist}>♡</button>
          <button className={styles.cart}>Add to Cart</button>
          <button className={styles.buy}>Buy</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
